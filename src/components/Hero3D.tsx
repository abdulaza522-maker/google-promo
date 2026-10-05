'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 160, 32]} />
        <meshStandardMaterial color="#4285F4" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[2.4, 0, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#EA4335" />
      </mesh>
      <mesh position={[-2.4, 0, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#FBBC05" />
      </mesh>
      <mesh position={[0, 2.4, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#34A853" />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.6} color="#4285F4" />
        <AnimatedShape />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}