import { GeometryProps } from "../../../types/three";
import SnakeTongueGeometry from "./SnakeTongueGeometry";
import { DoubleSide } from "three";

function SnakeTongue(props: GeometryProps) {
  return (
    <mesh {...props}>
      <SnakeTongueGeometry />
      <meshStandardMaterial
        color={"red"}
        side={DoubleSide}
        transparent={true}
        opacity={1}
      />
    </mesh>
  );
}

export default SnakeTongue;
