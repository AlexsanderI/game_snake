import SnakeForeheadGeometry from "./SnakeForeheadGeometry";

function SnakeForehead() {
  return (
    <mesh>
      <SnakeForeheadGeometry />
      <meshStandardMaterial color={0x44abda} />
    </mesh>
  );
}

export default SnakeForehead;
