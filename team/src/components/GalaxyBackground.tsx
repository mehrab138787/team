import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GalaxyBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    nebula: THREE.Points;
    stars: THREE.Points;
    blackHole: THREE.Mesh;
    animationId: number;
    mouse: { x: number; y: number };
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with enhanced settings
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Mouse tracking for interactive effects
    const mouse = { x: 0, y: 0 };

    // Enhanced Galaxy Spiral Particles
    const galaxyParticleCount = 25000;
    const galaxyPositions = new Float32Array(galaxyParticleCount * 3);
    const galaxyColors = new Float32Array(galaxyParticleCount * 3);
    const galaxySizes = new Float32Array(galaxyParticleCount);
    const galaxyVelocities = new Float32Array(galaxyParticleCount * 3);

    const galaxyColorPalette = [
      new THREE.Color(0x8B5CF6), // Purple
      new THREE.Color(0x06B6D4), // Cyan
      new THREE.Color(0xEC4899), // Pink
      new THREE.Color(0x3B82F6), // Blue
      new THREE.Color(0xFFFFFF), // White
      new THREE.Color(0xFF6B6B), // Red
      new THREE.Color(0x4ECDC4), // Teal
    ];

    for (let i = 0; i < galaxyParticleCount; i++) {
      const i3 = i * 3;
      
      // Enhanced spiral galaxy pattern with multiple arms
      const angle = Math.random() * Math.PI * 4;
      const radius = Math.pow(Math.random(), 0.7) * 80 + 10;
      const spiralFactor = angle * 0.3;
      const armOffset = (Math.floor(Math.random() * 4) * Math.PI * 0.5);
      
      galaxyPositions[i3] = Math.cos(angle + spiralFactor + armOffset) * radius + (Math.random() - 0.5) * 10;
      galaxyPositions[i3 + 1] = (Math.random() - 0.5) * 30 * Math.pow(Math.random(), 2);
      galaxyPositions[i3 + 2] = Math.sin(angle + spiralFactor + armOffset) * radius + (Math.random() - 0.5) * 10;

      // Velocity for orbital motion
      galaxyVelocities[i3] = -galaxyPositions[i3 + 2] * 0.001;
      galaxyVelocities[i3 + 1] = (Math.random() - 0.5) * 0.002;
      galaxyVelocities[i3 + 2] = galaxyPositions[i3] * 0.001;

      // Enhanced color distribution
      const distanceFromCenter = Math.sqrt(galaxyPositions[i3] ** 2 + galaxyPositions[i3 + 2] ** 2);
      let colorIndex;
      if (distanceFromCenter < 20) {
        colorIndex = Math.random() < 0.7 ? 0 : 4; // Purple or white for center
      } else if (distanceFromCenter < 40) {
        colorIndex = Math.floor(Math.random() * 3); // Purple, cyan, pink
      } else {
        colorIndex = Math.floor(Math.random() * galaxyColorPalette.length);
      }
      
      const color = galaxyColorPalette[colorIndex];
      galaxyColors[i3] = color.r;
      galaxyColors[i3 + 1] = color.g;
      galaxyColors[i3 + 2] = color.b;

      galaxySizes[i] = Math.random() * 4 + 1;
    }

    const galaxyGeometry = new THREE.BufferGeometry();
    galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3));
    galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3));
    galaxyGeometry.setAttribute('size', new THREE.BufferAttribute(galaxySizes, 1));
    galaxyGeometry.setAttribute('velocity', new THREE.BufferAttribute(galaxyVelocities, 3));

    // Enhanced shader material for galaxy
    const galaxyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2() },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 velocity;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float time;
        uniform vec2 mouse;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Orbital motion
          pos.x += velocity.x * time * 10.0;
          pos.z += velocity.z * time * 10.0;
          pos.y += sin(time * 0.5 + position.x * 0.01) * 2.0;
          
          // Mouse interaction
          vec2 mouseInfluence = mouse * 0.1;
          pos.x += mouseInfluence.x * (1.0 / (length(position.xy) * 0.01 + 1.0));
          pos.y += mouseInfluence.y * (1.0 / (length(position.xy) * 0.01 + 1.0));
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          
          // Distance-based alpha
          float distance = length(mvPosition.xyz);
          vAlpha = 1.0 - smoothstep(50.0, 200.0, distance);
          
          gl_PointSize = size * (400.0 / -mvPosition.z) * vAlpha;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        uniform float time;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          
          if (dist > 0.5) discard;
          
          // Enhanced glow effect
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= vAlpha;
          
          // Pulsing effect
          alpha *= 0.8 + 0.4 * sin(time * 2.0 + gl_FragCoord.x * 0.01);
          
          // Core brightness
          float core = 1.0 - smoothstep(0.0, 0.2, dist);
          vec3 finalColor = vColor + core * 0.5;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const galaxyParticles = new THREE.Points(galaxyGeometry, galaxyMaterial);
    scene.add(galaxyParticles);

    // Nebula clouds
    const nebulaCount = 8000;
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);
    const nebulaSizes = new Float32Array(nebulaCount);

    for (let i = 0; i < nebulaCount; i++) {
      const i3 = i * 3;
      
      nebulaPositions[i3] = (Math.random() - 0.5) * 200;
      nebulaPositions[i3 + 1] = (Math.random() - 0.5) * 100;
      nebulaPositions[i3 + 2] = (Math.random() - 0.5) * 200;

      const nebulaColor = new THREE.Color().setHSL(
        Math.random() * 0.3 + 0.7, // Purple to pink hues
        0.8,
        0.3 + Math.random() * 0.4
      );
      
      nebulaColors[i3] = nebulaColor.r;
      nebulaColors[i3 + 1] = nebulaColor.g;
      nebulaColors[i3 + 2] = nebulaColor.b;

      nebulaSizes[i] = Math.random() * 15 + 5;
    }

    const nebulaGeometry = new THREE.BufferGeometry();
    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeometry.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));
    nebulaGeometry.setAttribute('size', new THREE.BufferAttribute(nebulaSizes, 1));

    const nebulaMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        varying float vSize;
        uniform float time;
        
        void main() {
          vColor = color;
          vSize = size;
          
          vec3 pos = position;
          pos += sin(time * 0.2 + position.x * 0.01) * 3.0;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vSize;
        uniform float time;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          
          // Soft cloud-like appearance
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= 0.1 + 0.05 * sin(time + vSize);
          
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // Distant stars
    const starCount = 5000;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      
      starPositions[i3] = (Math.random() - 0.5) * 400;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 400;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 400;

      const starColor = Math.random() < 0.8 ? new THREE.Color(0xFFFFFF) : 
                       Math.random() < 0.5 ? new THREE.Color(0x8B5CF6) : new THREE.Color(0x06B6D4);
      
      starColors[i3] = starColor.r;
      starColors[i3 + 1] = starColor.g;
      starColors[i3 + 2] = starColor.b;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Central Black Hole
    const blackHoleGeometry = new THREE.SphereGeometry(3, 32, 32);
    const blackHoleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform float time;
        
        void main() {
          vPosition = position;
          vNormal = normal;
          
          vec3 pos = position;
          pos += normal * sin(time * 2.0) * 0.1;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform float time;
        
        void main() {
          vec3 color = vec3(0.1, 0.0, 0.2);
          float rim = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
          color += rim * vec3(0.5, 0.2, 1.0) * (0.5 + 0.5 * sin(time * 3.0));
          
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
    blackHole.position.set(0, 0, 0);
    scene.add(blackHole);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x8B5CF6, 2, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Camera position
    camera.position.set(0, 20, 60);
    camera.lookAt(0, 0, 0);

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Update shader uniforms
      (galaxyMaterial as THREE.ShaderMaterial).uniforms.time.value = time;
      (galaxyMaterial as THREE.ShaderMaterial).uniforms.mouse.value.set(mouse.x, mouse.y);
      (nebulaMaterial as THREE.ShaderMaterial).uniforms.time.value = time;
      (blackHoleMaterial as THREE.ShaderMaterial).uniforms.time.value = time;
      
      // Galaxy rotation
      galaxyParticles.rotation.y += 0.002;
      galaxyParticles.rotation.x += 0.001;
      
      // Nebula movement
      nebula.rotation.y -= 0.001;
      nebula.rotation.z += 0.0005;
      
      // Stars twinkling
      stars.rotation.y += 0.0002;
      
      // Black hole rotation
      blackHole.rotation.y += 0.01;
      blackHole.rotation.x += 0.005;
      
      // Camera movement based on mouse
      camera.position.x += (mouse.x * 5 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 5 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };

    animate();

    // Store references
    sceneRef.current = { scene, camera, renderer, particles: galaxyParticles, nebula, stars, blackHole, animationId, mouse };

    // Handle resize
    const handleResize = () => {
      if (!sceneRef.current) return;
      
      const { camera, renderer } = sceneRef.current;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      (galaxyMaterial as THREE.ShaderMaterial).uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
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
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10"
      style={{ 
        background: 'radial-gradient(ellipse at center, #1a0b2e 0%, #16213e 30%, #0f3460 60%, #000000 100%)'
      }}
    />
  );
};

export default GalaxyBackground;