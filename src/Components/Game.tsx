import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useState } from "react";
import { getTimerStep } from "./../engine/time/timerStepPerLevel";
import { getField } from "./../engine/field/fieldPerLevel";
import Fields from "./Field";
import Food from "./Food";
import Snake from "./Snake";
import moveSnake from "./../engine/snake/moveSnake";
import { snakeCatchesFoodEvent } from "./../engine/events/snakeCatchesFoodEvent";
import snakeCatchesBonusEvent from "./../engine/events/snakeCatchesBonusEvent";
import renderInfo from "./../engine/render/renderInfo";
import { checkTimerWorking } from "./../engine/time/isTimer";
import { setTimer } from "./../engine/time/timer";
import * as INTERRUPT from "./../engine/events/interruptGameEvent";
import { ObstaclesFix, ObstaclesX, ObstaclesY } from "./Obstacles";
import setObstacleParams from "./../engine/obstacles/setObstacleParams";
import { getObstacles } from "./../engine/obstacles/obstaclesPerLevel";
import { setBonusParams } from "./../engine/bonuses/bonusParams";
import Bonuses from "./Bonuses";
import { getBonuses } from "./../engine/bonuses/bonusesPerLevel";
// import ControlPanel from "./ControlPanel";
// import ControlBall from "./ControlBall";

function Game() {
  const gridSize = getField();
  const { size } = useThree();
  renderInfo();
  const [previousTime, setPreviousTime] = useState(0);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if ((elapsedTime - previousTime) * 1000 > getTimerStep()) {
      INTERRUPT.interruptGameEvent();
      if (!INTERRUPT.getInterruptGame()) {
        setBonusParams();
        setObstacleParams(500);
        moveSnake();
        snakeCatchesFoodEvent();
        snakeCatchesBonusEvent();
      }
      if (checkTimerWorking()) setTimer(getTimerStep());
      setPreviousTime(elapsedTime);
    }
  });

  return (
    <>
      <OrbitControls />
      <OrthographicCamera
        makeDefault
        position={[0, 0, 10]}
        zoom={Math.min(size.width, size.height) / gridSize}
      />
      <ambientLight />
      <directionalLight position={[0, 0, 5]} intensity={1} />
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
    </>
  );
}

export default Game;
