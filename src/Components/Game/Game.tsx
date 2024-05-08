import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { getTimerStep } from "../../engine/time/timerStepPerLevel";
import renderInfo from "../../engine/render/renderInfo";
import { checkTimerWorking } from "../../engine/time/isTimer";
import { setTimer } from "../../engine/time/timer";
import gameLoop from "./gameLoop";
import GamePlay from "./GamePlay";

function Game() {
  renderInfo();
  const [previousTime, setPreviousTime] = useState(0);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if ((elapsedTime - previousTime) * 1000 > getTimerStep()) {
      gameLoop();
      if (checkTimerWorking()) setTimer(getTimerStep());
      setPreviousTime(elapsedTime);
    }
  });

  return <GamePlay />;
}

export default Game;
