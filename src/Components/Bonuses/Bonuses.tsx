/* eslint-disable react-hooks/exhaustive-deps */

import * as React from "react";
import { useState, useEffect } from "react";
import { Vector3 } from "@react-three/fiber";
import { getField } from "../../engine/field/fieldPerLevel";
import { getFoodEaten } from "../../engine/events/snakeCatchesFoodEvent";
import { getBonusCoord, getCurrentBonus } from "../../engine/bonuses/bonus";
import { getBonusAvailability } from "../../engine/bonuses/bonusAvailableState";
import { getBonuses } from "../../engine/bonuses/bonusesPerLevel";

const Bonuses: React.FC = () => {
  const [bonusPosition, setBonusPosition] = useState<Vector3>([0, 0, 0]);
  useEffect(() => {
    const gridSize = getField();
    if (getBonusCoord()) {
      const bonusX = Math.round(getBonusCoord()[0] - gridSize / 2 - 1);
      const bonusY = Math.round(getBonusCoord()[1] - gridSize / 2 - 1);
      const currentBonusPosition: Vector3 = [bonusX, bonusY, 0];
      setBonusPosition(currentBonusPosition);
    }
  }, [getFoodEaten()]);
  return (
    <>
      {getBonusAvailability() && (
        <mesh position={bonusPosition}>
          <boxGeometry args={[1, 1, 1]} />
          {getBonuses()[getCurrentBonus()].type === "snakeBreaksObstacles" && (
            <meshStandardMaterial color="#453347" />
          )}
          {getBonuses()[getCurrentBonus()].type === "snakeStopsGrowing" && (
            <meshStandardMaterial color="#5d445f" />
          )}
          {getBonuses()[getCurrentBonus()].type === "snakeCrossesBorders" && (
            <meshStandardMaterial color="#6e4f71" />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraTime" && (
            <meshStandardMaterial color="#7f5a83" />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraLives" && (
            <meshStandardMaterial color="#8c6c91" />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraScores" && (
            <meshStandardMaterial color="#997d9e" />
          )}
          {getBonuses()[getCurrentBonus()].type === "doubleScoresFood" && (
            <meshStandardMaterial color="#9c89a4" />
          )}
        </mesh>
      )}
    </>
  );
};

export default Bonuses;
