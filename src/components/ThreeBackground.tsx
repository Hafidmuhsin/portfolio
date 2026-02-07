"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 15;
    }

    const ref = useRef<THREE.Points>(null!);
    useFrame((state) => {
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.015} color="#d4af37" transparent opacity={0.6} sizeAttenuation={true} />
        </points>
    );
};

const FloatingShape = ({ position, color }: { position: [number, number, number], color: string }) => {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;
        meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() * 0.5) * 0.002;
    });

    return (
        <mesh ref={meshRef} position={position}>
            <icosahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
        </mesh>
    );
};

export default function ThreeBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <ParticleField />
                <FloatingShape position={[-3, 2, -2]} color="#d4af37" />
                <FloatingShape position={[3, -2, -3]} color="#00f3ff" />
                <FloatingShape position={[0, -3, -5]} color="#ffffff" />
            </Canvas>
        </div>
    );
}
