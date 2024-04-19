import SnakeUpperPalateGeometry from "./SnakeUpperPalateGeometry";

function SnakeUpperPalate() {
  return (
    <mesh>
      <SnakeUpperPalateGeometry />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

export default SnakeUpperPalate;
