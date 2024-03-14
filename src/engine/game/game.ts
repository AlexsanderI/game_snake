/**
 * @module game.ts Начинает игру
 *    @function game Настройка уровня и запуск игры
 */
import setLevelEvent from "../events/setLevelEvent";
// import keyboardEvents from "../events/keyboardEvents";
import setLoop from "../time/setLoop";
// import Hammer from "hammerjs";
// import swipeEvent from "../events/swipeEvent";

/**
 * Запуск игры
 * @param start - уровень, с которого начинается игра
 * @description
 *  1. Запускает стартовый уровень
 *  2. Запускает игровой цикл
 *  3 Передает управление змейкой клавиатуре
 */
function game(start: number): void {
  setLevelEvent(start);
  setLoop();

  // document.addEventListener("keydown", keyboardEvents);
  // document.addEventListener("touchstart", handleSwipeEvent);
  // document.addEventListener("touchmove", handleSwipeEvent);
  // document.addEventListener("touchend", handleSwipeEvent);
}

export default game;
