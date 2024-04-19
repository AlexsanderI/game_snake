import SnakeEyelidsGeometry from "./SnakeEyelidsGeometry";

function SnakeEyelids() {
  return (
    <mesh>
      <SnakeEyelidsGeometry />
      <meshStandardMaterial color={0xfedc32} />
    </mesh>
  );
}

export default SnakeEyelids;
