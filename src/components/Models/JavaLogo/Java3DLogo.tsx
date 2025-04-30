import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Java3DLogo = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotate the logo continuously
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  // Create the Java cup shape
  const shape = new THREE.Shape();
  // Simplified Java cup path - you might want to refine this
  shape.moveTo(0, 0);
  shape.lineTo(2, 0);
  shape.lineTo(2.5, 0.5);
  shape.lineTo(2.5, 1.5);
  shape.lineTo(2, 2);
  shape.lineTo(0, 2);
  shape.lineTo(-0.5, 1.5);
  shape.lineTo(-0.5, 0.5);
  shape.closePath();

  // Handle shape
  const handleShape = new THREE.Shape();
  handleShape.moveTo(2, 1);
  handleShape.quadraticCurveTo(3, 1, 3, 2);
  handleShape.quadraticCurveTo(3, 3, 2, 3);

  // Extrude settings
  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    depth: 0.2,
    bevelEnabled: true,
    bevelSize: 0.05,
    bevelThickness: 0.05,
  };

  return (
    <group>
      {/* Main cup */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshPhongMaterial color="#007396" shininess={100} />
      </mesh>

      {/* Handle */}
      <mesh position={[0, 0, 0]}>
        <extrudeGeometry args={[handleShape, extrudeSettings]} />
        <meshPhongMaterial color="#007396" shininess={100} />
      </mesh>

      {/* Steam */}
      <group position={[0.5, 2.5, 0]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="white" transparent opacity={0.7} />
        </mesh>
        <mesh position={[0.4, 0.4, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color="white" transparent opacity={0.7} />
        </mesh>
      </group>
    </group>
  );
};

export const JavaLogoScene = () => {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 50 }}
      style={{ width: "100%", height: "400px", background: "#f0f0f0" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Java3DLogo />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};
