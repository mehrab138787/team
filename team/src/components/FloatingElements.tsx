import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloatingElements: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    elements: THREE.Group;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const elementsGroup = new THREE.Group();
    scene.add(elementsGroup);

    // Create floating geometric elements
    const createFloatingElement = (geometry: THREE.BufferGeometry, color: number, position: THREE.Vector3, scale: number) => {
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(color) }
        },
        vertexShader: `
          varying vec3 vPosition;
          varying vec3 vNormal;
          uniform float time;
          
          void main() {
            vPosition = position;
            vNormal = normal;
            
            vec3 pos = position;
            pos += normal * sin(time * 2.0 + position.x * 0.1) * 0.1;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vPosition;
          varying vec3 vNormal;
          uniform float time;
          uniform vec3 color;
          
          void main() {
            float rim = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
            vec3 finalColor = color + rim * 0.5;
            float alpha = 0.3 + rim * 0.4;
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.scale.setScalar(scale);
      return mesh;
    };

    // Add various floating elements
    const elements = [
      createFloatingElement(new THREE.OctahedronGeometry(1), 0x8B5CF6, new THREE.Vector3(-30, 10, -20), 2),
      createFloatingElement(new THREE.TetrahedronGeometry(1), 0x06B6D4, new THREE.Vector3(25, -15, -30), 1.5),
      createFloatingElement(new THREE.IcosahedronGeometry(1), 0xEC4899, new THREE.Vector3(-20, -20, -25), 1.8),
      createFloatingElement(new THREE.DodecahedronGeometry(1), 0x3B82F6, new THREE.Vector3(35, 20, -35), 1.2),
      createFloatingElement(new THREE.ConeGeometry(1, 2), 0xFF6B6B, new THREE.Vector3(-35, 5, -15), 1.6),
      createFloatingElement(new THREE.CylinderGeometry(0.5, 1, 2), 0x4ECDC4, new THREE.Vector3(20, 25, -40), 1.4),
    ];

    elements.forEach(element => elementsGroup.add(element));

    // Camera position
    camera.position.z = 50;

    // Animation
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Update each element
      elements.forEach((element, index) => {
        const material = element.material as THREE.ShaderMaterial;
        material.uniforms.time.value = time;
        
        // Individual rotation and movement
        element.rotation.x += 0.01 * (index + 1);
        element.rotation.y += 0.008 * (index + 1);
        element.rotation.z += 0.006 * (index + 1);
        
        // Floating movement
        element.position.y += Math.sin(time * 0.5 + index) * 0.02;
        element.position.x += Math.cos(time * 0.3 + index) * 0.01;
      });
      
      // Group rotation
      elementsGroup.rotation.y += 0.002;
      
      renderer.render(scene, camera);
    };

    animate();

    // Store references
    sceneRef.current = { scene, camera, renderer, elements: elementsGroup, animationId };

    // Handle resize
    const handleResize = () => {
      if (!sceneRef.current) return;
      
      const { camera, renderer } = sceneRef.current;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.renderer.dispose();
        if (mountRef.current && sceneRef.current.renderer.domElement) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-5 pointer-events-none"
    />
  );
};

export default FloatingElements;