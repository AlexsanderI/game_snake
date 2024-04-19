import SnakeNoseGeometry from "./SnakeNoseGeometry";

function SnakeNose() {
  return (
    <mesh>
      <SnakeNoseGeometry />
      <meshStandardMaterial color={0x44abda} />
    </mesh>
  );
}

export default SnakeNose;
