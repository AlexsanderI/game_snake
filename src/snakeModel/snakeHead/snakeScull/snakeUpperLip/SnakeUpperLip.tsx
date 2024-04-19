import SnakeUpperLipGeometry from "./SnakeUpperLipGeometry";

function SnakeUpperLip() {
  return (
    <mesh>
      <SnakeUpperLipGeometry />
      <meshStandardMaterial color={0x44abda} />
    </mesh>
  );
}

export default SnakeUpperLip;
