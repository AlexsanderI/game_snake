import SnakeCheeksGeometry from "./SnakeCheeksGeometry";

function SnakeCheeks() {
  return (
    <mesh>
      <SnakeCheeksGeometry />
      <meshStandardMaterial color={0x44abda} />
    </mesh>
  );
}

export default SnakeCheeks;
