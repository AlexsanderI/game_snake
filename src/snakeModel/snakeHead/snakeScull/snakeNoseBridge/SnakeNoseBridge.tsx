import SnakeNoseBridgeGeometry from "./SnakeNoseBridgeGeometry";

function SnakeNoseBridge() {
  return (
    <mesh>
      <SnakeNoseBridgeGeometry />
      <meshStandardMaterial color={0x44abda} />
    </mesh>
  );
}

export default SnakeNoseBridge;
