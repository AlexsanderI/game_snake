function snakeHeadSetRotation(diffX: number, diffY: number, turn: number) {
  const rot =
    diffX === 0 && diffY === -1
      ? [turn, 0, turn]
      : diffX === 0 && diffY === 1
      ? [turn, 0, 0]
      : diffX === -1 && diffY === 0
      ? [turn, 0, 55]
      : diffX === 1 && diffY === 0
      ? [0, turn, 55]
      : [turn, 0, turn];

  return rot;
}

export default snakeHeadSetRotation;
