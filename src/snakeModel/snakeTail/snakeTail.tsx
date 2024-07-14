import { GeometryProps } from "../../types/three";
import SnakeTailGeometry from "./SnakeTailGeometry";
import { DoubleSide, Vector3 } from "three";

interface SnakeTailProps extends GeometryProps {
  opacity: number;
}

function SnakeTail(props: SnakeTailProps) {
  const { opacity, ...geometryProps } = props;
  // console.log(opacity);

  return (
    <group {...geometryProps}>
      <mesh
        position={new Vector3(0, 0, 0)}
        rotation-x={0}
        rotation-y={22}
        rotation-z={11}
        scale={1}
      >
        <SnakeTailGeometry />
        <meshStandardMaterial
          color={"red"}
          transparent={true}
          opacity={opacity}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default SnakeTail;
