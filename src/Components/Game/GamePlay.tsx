import { useThree } from "@react-three/fiber";
import { getField } from "../../engine/field/fieldPerLevel";
import { OrthographicCamera } from "@react-three/drei";
import Fields from "../Field/Field";
import { getObstacles } from "../../engine/obstacles/obstaclesPerLevel";
import { ObstaclesFix, ObstaclesX, ObstaclesY } from "../Obstacles/Obstacles";
import { getBonuses } from "../../engine/bonuses/bonusesPerLevel";
import Bonuses from "../Bonuses/Bonuses";
import Snake from "../Snake/Snake";
import Food from "../Food/Food";

function GamePlay() {
  const gridSize = getField();
  const { size } = useThree();
  return (
    <mesh>
      {/* <OrbitControls /> */}
      <OrthographicCamera
        makeDefault
        near={0.01}
        position={[0, 0, 10]}
        zoom={Math.min(size.width, size.height) / gridSize}
      />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[0, 0, 5]} intensity={1} />
      <Fields size={gridSize} />
      {getObstacles().length !== 0 && (
        <>
          <ObstaclesX />
          <ObstaclesY />
          <ObstaclesFix />
        </>
      )}
      {getBonuses().length !== 0 && <Bonuses />}
      <Snake />
      <Food />
    </mesh>
  );
}

export default GamePlay;
