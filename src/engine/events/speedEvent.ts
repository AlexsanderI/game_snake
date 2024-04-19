/**
 *  @module speedEvent.ts Управляет скоростью змейки
 *     @function speedElement Изменяет скорость змейки на шаг за одно нажатие
 */
import { Event } from "../../types/event";
import findLastMoveDirection from "../protocol/findLastMoveDirection";
import { checkTimerWorking } from "../time/isTimer";
/**
 * Создает событие изменения скорости на шаг при нажатии клавиш Shift и Ctrl
 * @description
 *  создает "пустое" событие, которое будет игнорироваться за пределами функции
 *  находит в протоколе последнюю запись о направлении движения змейки
 *  если запись имеется, игра идет, а одна из клавиш Shift или Ctrl нажата,
 *  создается соответствующее событие вместо "пустого", которое и возвращается
 * @param e событие нажатия на клавишу
 * @returns событие изменения скорости змейки
 */
function speedEvent(e: KeyboardEvent): Event {
  let newEvent: Event = Object.assign({}, { name: "", value: "" });
  const moveDirection = findLastMoveDirection();
  if (moveDirection.name === "X" || moveDirection.name === "Y") {
    if (e.code === "ShiftRight" && checkTimerWorking()) {
      newEvent = Object.assign({}, { name: moveDirection.name, value: "+" });
    } else if (e.code === "ControlRight" && checkTimerWorking()) {
      newEvent = Object.assign({}, { name: moveDirection.name, value: "-" });
    }
  }

  return newEvent;
}

export default speedEvent;
