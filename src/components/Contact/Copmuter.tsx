import { useGLTF } from "@react-three/drei";
import {
  MathProps,
  ReactProps,
  EventHandlers,
  InstanceProps,
} from "@react-three/fiber";
import {
  Mutable,
  Overwrite,
} from "@react-three/fiber/dist/declarations/src/core/utils";
import { JSX } from "react/jsx-runtime";
import { Group, Object3DEventMap } from "three";

export function Computer(
  props: JSX.IntrinsicAttributes &
    Mutable<
      Overwrite<
        Partial<
          Overwrite<
            Group<Object3DEventMap>,
            MathProps<Group<Object3DEventMap>> &
              ReactProps<Group<Object3DEventMap>> &
              Partial<EventHandlers>
          >
        >,
        Omit<InstanceProps<Group<Object3DEventMap>, Group>, "object">
      >
    >
) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  return (
    // @ts-ignore
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
