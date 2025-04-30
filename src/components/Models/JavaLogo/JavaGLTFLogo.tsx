import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const JavaModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const gltf = useLoader(GLTFLoader, "/models/java_logo.glb");

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export const JavaGLTFLogo = () => {
  return (
    <Canvas
      camera={{ position: [3, 3, 3], fov: 50 }}
      style={{ width: "100%", height: "400px", background: "#f0f0f0" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <JavaModel />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};
