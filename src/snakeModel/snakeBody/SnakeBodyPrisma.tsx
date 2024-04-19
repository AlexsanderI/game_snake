import { GeometryProps } from "../../types/three";
import SnakeBodyGeometry from "./snakeBodyGeometry";

export function SnakeBodyRightPrisma(props: GeometryProps) {
  return (
    <mesh receiveShadow castShadow {...props}>
      <SnakeBodyGeometry />
      <meshStandardMaterial color={0x44abda} />
    </mesh>
  );
}

export function SnakeBodyLeftPrisma(props: GeometryProps) {
  return (
    <mesh receiveShadow castShadow {...props}>
      <SnakeBodyGeometry />
      <meshStandardMaterial color={0xfedc32} />
    </mesh>
  );
}
