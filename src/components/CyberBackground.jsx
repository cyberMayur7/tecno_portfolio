import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* Cyber network particles */
const CyberParticles = () => {
  const ref = useRef();

  // Create random points (nodes)
  const positions = new Float32Array(3000 * 3);
  for (let i = 0; i < positions.length; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  useFrame(({ mouse }) => {
    if (!ref.current) return;

    // Slow rotation + mouse parallax
    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x = mouse.y * 0.15;
    ref.current.rotation.y = mouse.x * 0.15;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#38bdf8"   // cyber blue
        size={0.04}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <CyberParticles />
      </Canvas>
    </div>
  );
};

export default CyberBackground;
