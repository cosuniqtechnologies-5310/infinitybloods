'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Cell({ color = "#db0000", distort = 0.3, speed = 2 }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {/* Scaling Z to 0.4 flattens the sphere into a disc/cell shape */}
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={[1, 1, 0.4]}>
        <MeshDistortMaterial
          color={color}
          emissive="#3a0000"
          roughness={0.2}
          metalness={0.8}
          distort={distort} 
          speed={speed}     
        />
      </Sphere>
    </Float>
  );
}

export default function BloodCellCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-90">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.5} color="#ff0000" />
        <directionalLight position={[10, 10, 10]} intensity={4} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={2} color="#ff0000" />
        <pointLight position={[0, 0, 5]} intensity={2} color="#db0000" />
        
        {/* Main large cell */}
        <group position={[1.5, 0, -1]} scale={1.8}>
          <Cell color="#db0000" distort={0.25} speed={1.5} />
        </group>
        
        {/* Floating background cells */}
        <group position={[-2, 1.5, -3]} scale={0.8}>
          <Cell color="#c10000" distort={0.4} speed={2} />
        </group>
        <group position={[0.5, -1.8, -2]} scale={0.5}>
          <Cell color="#a80000" distort={0.3} speed={2.5} />
        </group>
        <group position={[3, 2, -4]} scale={0.4}>
          <Cell color="#8e0000" distort={0.5} speed={3} />
        </group>
      </Canvas>
    </div>
  );
}
