import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import floorTexture from "../assets/floor.png";
import { FieldsProps } from "../types/field";

const Fields: React.FC<FieldsProps> = ({ size }) => {
  const texture = useTexture(floorTexture);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <group>
      <mesh position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial
          color="gray"
          map={texture}
          map-repeat={[size, size]}
        />
      </mesh>
    </group>
  );
};

export default Fields;
