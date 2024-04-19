import { GeometryProps } from "../../../types/three";
import SnakeJawGeometry from "./SnakeJawGeometry";

function SnakeJaw(props: GeometryProps) {
  return (
    <mesh {...props}>
      <SnakeJawGeometry />
      <meshStandardMaterial color={0xfedc32} />
    </mesh>
  );
}

export default SnakeJaw;
