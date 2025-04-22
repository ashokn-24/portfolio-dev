import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { JSX } from "react/jsx-runtime";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    _________6_blinn1_0: THREE.Mesh;
    body1_blinn1_0: THREE.Mesh;
    cabin_blinn1_0: THREE.Mesh;
    chair_body_blinn1_0: THREE.Mesh;
    comp_blinn1_0: THREE.Mesh;
    emis_lambert1_0: THREE.Mesh;
    handls_blinn1_0: THREE.Mesh;
    keyboard_blinn1_0: THREE.Mesh;
    kovrik_blinn1_0: THREE.Mesh;
    lamp_bl_blinn1_0: THREE.Mesh;
    lamp_white_blinn1_0: THREE.Mesh;
    miuse_blinn1_0: THREE.Mesh;
    monitor2_blinn1_0: THREE.Mesh;
    monitor3_blinn1_0: THREE.Mesh;
    pCylinder5_blinn1_0: THREE.Mesh;
    pillows_blinn1_0: THREE.Mesh;
    polySurface53_blinn1_0: THREE.Mesh;
    radiator_blinn1_0: THREE.Mesh;
    radiator_blinn1_0001: THREE.Mesh;
    railing_blinn1_0: THREE.Mesh;
    red_bttns_blinn1_0: THREE.Mesh;
    red_vac_blinn1_0: THREE.Mesh;
    stylus_blinn1_0: THREE.Mesh;
    table_blinn1_0: THREE.Mesh;
    tablet_blinn1_0: THREE.Mesh;
    triangle_blinn1_0: THREE.Mesh;
    vac_black_blinn1_0: THREE.Mesh;
    vacuum1_blinn1_0: THREE.Mesh;
    vacuumgrey_blinn1_0: THREE.Mesh;
    vires_blinn1_0: THREE.Mesh;
    window_blinn1_0: THREE.Mesh;
    window4_phong1_0: THREE.Mesh;
  };
  materials: {
    blinn1: THREE.MeshStandardMaterial;
    lambert1: THREE.MeshStandardMaterial;
    phong1: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Room(props: JSX.IntrinsicElements["group"]) {
  const gltf = useGLTF("/models/optimized-room.glb") as unknown as GLTFResult;
  const { nodes, materials } = gltf;
  const matTexture = useTexture("/images/textures/mat1.png");
  const screenRef = useRef<THREE.Mesh>(null!);

  const bodyMat = new THREE.MeshPhongMaterial({
    map: matTexture,
  });

  const curtainMaterial = new THREE.MeshPhongMaterial({
    color: "#d90429",
  });

  const tableMaterial = new THREE.MeshPhongMaterial({
    color: "#582f0e",
  });

  const radiatorMaterial = new THREE.MeshPhongMaterial({
    color: "#fff",
  });

  const compMaterial = new THREE.MeshStandardMaterial({
    color: "#fff",
  });

  const pillowMaterial = new THREE.MeshPhongMaterial({
    color: "#8338ec",
  });

  const chairMaterial = new THREE.MeshPhongMaterial({
    color: "#000",
  });
  const brightMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    emissive: "#ffffff",
    emissiveIntensity: 0,
  });

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        {screenRef.current && (
          <SelectiveBloom
            selection={[screenRef.current]}
            intensity={4}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            blendFunction={BlendFunction.ADD}
          />
        )}
      </EffectComposer>
      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={curtainMaterial}
      />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMat} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={chairMaterial}
      />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={nodes.handls_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.keyboard_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.kovrik_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_bl_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_white_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.miuse_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        ref={screenRef}
        geometry={nodes.monitor2_blinn1_0.geometry}
        material={brightMaterial}
      />
      <mesh
        ref={screenRef}
        geometry={nodes.monitor3_blinn1_0.geometry}
        material={brightMaterial}
      />
      <mesh
        geometry={nodes.pCylinder5_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={pillowMaterial}
      />
      <mesh
        geometry={nodes.polySurface53_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0.geometry}
        material={radiatorMaterial}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0001.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.railing_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_bttns_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_vac_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.stylus_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.table_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.tablet_blinn1_0.geometry}
        material={tableMaterial}
      />
      <mesh
        geometry={nodes.triangle_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vac_black_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuum1_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuumgrey_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vires_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window4_phong1_0.geometry}
        material={materials.phong1}
      />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
