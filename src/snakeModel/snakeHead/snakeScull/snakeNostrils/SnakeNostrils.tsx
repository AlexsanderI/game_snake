import SnakeNostrilsGeometry from "./SnakeNostrilsGeometry";

function SnakeNostrils() {
  return (
    <mesh>
      <SnakeNostrilsGeometry />
      <meshStandardMaterial color={0xfedc32} />
    </mesh>
  );
}

export default SnakeNostrils;
