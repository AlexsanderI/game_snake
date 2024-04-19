import SnakeHeadBackGeometry from "./SnakeHeadBackGeometry";

function SnakeHeadBack() {
  return (
    <mesh>
      <SnakeHeadBackGeometry />
      <meshStandardMaterial color={0x44abda} />
    </mesh>
  );
}

export default SnakeHeadBack;
