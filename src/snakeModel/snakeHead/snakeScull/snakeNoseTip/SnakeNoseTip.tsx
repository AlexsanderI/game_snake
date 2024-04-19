import SnakeNoseTipGeometry from "./SnakeNoseTipGeometry";

function SnakeNoseTip() {
  return (
    <mesh>
      <SnakeNoseTipGeometry />
      <meshStandardMaterial color={0x44abda} />
    </mesh>
  );
}

export default SnakeNoseTip;
