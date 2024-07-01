/* eslint-disable react-hooks/exhaustive-deps */

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Text } from "@react-three/drei"; // Импортируем компонент Text
import { getField } from "../../engine/field/fieldPerLevel";
import { getFoodEaten } from "../../engine/events/snakeCatchesFoodEvent";
import { getBonusCoord, getCurrentBonus } from "../../engine/bonuses/bonus";
import { getBonusAvailability } from "../../engine/bonuses/bonusAvailableState";
import { getBonuses } from "../../engine/bonuses/bonusesPerLevel";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Object3D, Vector3 } from "three";

const Bonuses: React.FC = () => {
  const heard = useLoader(GLTFLoader, "/heard1.glb");
  const clock = useLoader(GLTFLoader, "/clock.glb");
  const ice = useLoader(GLTFLoader, "/snowflake.glb");
  const bomb = useLoader(GLTFLoader, "/bomb.glb");
  const key = useLoader(GLTFLoader, "/key.glb");
  const doubleApple = useLoader(GLTFLoader, "/doubleApple.glb");
  const wallet = useLoader(GLTFLoader, "/wallet4.glb");

  const [bonusPosition, setBonusPosition] = useState(new Vector3(0, 0, 0));

  const iceRef = useRef<Object3D>();

  useEffect(() => {
    const gridSize = getField();
    if (getBonusCoord()) {
      const bonusX = Math.round(getBonusCoord()[0] - gridSize / 2 - 1);
      const bonusY = Math.round(getBonusCoord()[1] - gridSize / 2 - 1);
      const currentBonusPosition = new Vector3(bonusX, bonusY, 1);

      setBonusPosition(currentBonusPosition);
    }
  }, [getFoodEaten()]);

  useEffect(() => {
    const gridSize = getField();
    const bonusCoord = getBonusCoord();
    if (bonusCoord) {
      const bonusX = Math.round(bonusCoord[0] - gridSize / 2 - 1);
      const bonusY = Math.round(bonusCoord[1] - gridSize / 2 - 1);
      const currentBonusPosition = new Vector3(bonusX, bonusY, 1);
      setBonusPosition(currentBonusPosition);
    }
  }, [getFoodEaten()]);

  useFrame(() => {
    if (iceRef.current) {
      iceRef.current.rotation.x += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <>
      {getBonusAvailability() && (
        <>
          {getBonuses()[getCurrentBonus()].type === "snakeBreaksObstacles" && (
            <primitive
              ref={iceRef}
              object={bomb.scene}
              position={bonusPosition}
              scale={3}
              rotation={[Math.PI / 2, 0, 0]}
            />
          )}
          {getBonuses()[getCurrentBonus()].type === "snakeStopsGrowing" && (
            <primitive
              ref={iceRef}
              object={ice.scene}
              position={bonusPosition}
              scale={50}
              rotation={[Math.PI / 4, 4, 4]}
            />
          )}
          {getBonuses()[getCurrentBonus()].type === "snakeCrossesBorders" && (
            <primitive
              ref={iceRef}
              object={key.scene}
              position={bonusPosition}
              scale={0.5}
              rotation={[Math.PI / 4, 4, 0]}
            />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraTime" && (
            <primitive
              ref={iceRef}
              object={clock.scene}
              position={bonusPosition}
              scale={0.2}
              rotation={[Math.PI / 1, 1, 1]}
            />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraLives" && (
            <primitive
              ref={iceRef}
              object={heard.scene}
              position={bonusPosition}
              scale={0.1}
              rotation={[Math.PI / 2, 0, 0]}
            />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraScores" && (
            <>
              <primitive
                // ref={iceRef}
                object={wallet.scene}
                position={bonusPosition}
                scale={1}
                // rotation={[Math.PI / 2, 0, 0]}
              />
              <Text
                position={bonusPosition.clone().add(new Vector3(0, 1.5, 0))}
                scale={[1, 1, 1]}
                color="#997d9e"
                anchorX="center"
                anchorY="middle"
                fontSize={1}
              >
                2
              </Text>
            </>
          )}
          {getBonuses()[getCurrentBonus()].type === "doubleScoresFood" && (
            <primitive
              ref={iceRef}
              object={doubleApple.scene}
              position={bonusPosition}
              scale={0.25}
              rotation={[Math.PI / 2, 0, 0]}
            />
          )}
        </>
      )}
    </>
  );
};

export default Bonuses;
