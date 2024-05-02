/**
 *  @module lifeLost.ts Обрабатывает событие потери жизни игроком
 *     @function lifeLost Выполняет действия при потере жизни
 */


import { useMenuStore } from "../../store/menuStore"

import { checkMistake, noMistakeWasMade } from "../lives/isMistake";
import { getLives, setLives } from "../lives/lives";
import { getSnakeHeadParams } from "../snake/snake";
import { stopTimer } from "../time/isTimer";
import protocolExecutor from "./protocolExecutor";
/**
 *  Запускается при потере жизни игроком
 *  @description
 *      1. Выдает информацию об ошибке и потере жизни
 *      2. Уменьшает количество доступных игроку жизней и определяет конец игры
 *      3. Возвращает игру в состояние ожидания новых действий игрока
 */
function lifeLost(): void {
  const { toggleModal, selectTitleMenu } = useMenuStore.getState();
  stopTimer();

  if (checkMistake()) {

    setTimeout(() => {
      selectTitleMenu(
        `You made a mistake ${getSnakeHeadParams().snakeHeadCoordX} : ${
          getSnakeHeadParams().snakeHeadCoordY
        } here! Be careful! You only have ${getLives()} lives left!`
      );
      toggleModal();
      setLives(-1);
      noMistakeWasMade();
    }, 500);

  }
}

export default lifeLost;
