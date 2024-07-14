import React from "react";
import SnakeHead from "../../snakeModel/snakeHead/SnakeHead";
import * as PRISMA from "../../snakeModel/snakeBody/SnakeBodyPrisma";
import * as SNAKE from "../../engine/snake/snake";
import SnakeTail from "../../snakeModel/snakeTail/snakeTail";
import setSnakePosition from "./setSnakePosition";
import setSnakeHeadProps from "./snakeHead/setSnakeHeadProps";
import setSnakeTailProps from "./snakeTail/setSnakeTailProps";
import setSnakeBodyProps from "./snakeBody/setSnakeBodyProps";
import { a, useSprings } from "@react-spring/three";
import { SnakePositionAnimationProps } from "../../types/three";

interface SnakeProps {
  onHeadPositionUpdate: (position: [number, number, number]) => void;
  opacity: number;
}

const Snake: React.FC<SnakeProps> = ({ onHeadPositionUpdate }, opacity) => {
  const snake: SnakePositionAnimationProps[] = [
    {
      initialPosition: [0, 0, 0],
      finalPosition: [0, 0, 0],
    },
  ];
  SNAKE.getSnakeBodyCoord().forEach((_: unknown, index: number) => {
    snake[index] = {
      initialPosition: [...setSnakePosition(index, SNAKE.getPreviousSnake())],
      finalPosition: [...setSnakePosition(index, SNAKE.getSnakeBodyCoord())],
    };
    if (index !== SNAKE.getSnakeBodyCoord().length - 1) snake.length += 1;
  });
  console.log(opacity);
  const move = useSprings(
    snake.length,
    snake.map((item, index) => ({
      from: { position: item.initialPosition },
      to: { position: item.finalPosition },
      config: {
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
      },
      delay: index * 20, // добавить задержку, чтобы части тела следовали за головой плавно
    }))
  );

  // Обновляем позицию головы змеи
  React.useEffect(() => {
    if (move[0]) {
      move[0].position.to((x, y, z) => {
        onHeadPositionUpdate([x, y, z]);
      });
    }
  }, [move, onHeadPositionUpdate]);

  return (
    <group>
      {move.map((item, index) => {
        return (
          <a.group
            key={index * Math.random()}
            position={item.position.to((x, y, z) => [x, y, z])}
          >
            {index === 0 && <SnakeHead {...setSnakeHeadProps()} />}
            {index !== 0 && index <= SNAKE.getSnakeBodyCoord().length - 3 && (
              <>
                <PRISMA.SnakeBodyRightPrisma {...setSnakeBodyProps(index)[0]} />
                <PRISMA.SnakeBodyLeftPrisma {...setSnakeBodyProps(index)[1]} />
              </>
            )}
            {index === SNAKE.getSnakeBodyCoord().length - 2 && (
              <SnakeTail {...setSnakeTailProps(index)} opacity={opacity} />
            )}
            {index === SNAKE.getSnakeBodyCoord().length - 1 && <></>}
          </a.group>
        );
      })}
    </group>
  );
};

export default Snake;
