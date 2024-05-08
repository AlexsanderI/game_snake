/**
 *  @module gameOver.ts Обрабатывает событие окончания игры
 *     @function gameOver Выполняет закрытие текущей игры и запуск новой
 */
import { useMenuStore } from "../../store/menuStore";
import { stopTimer } from "../time/isTimer";
import { getProtocol } from "./protocol";
/**
 * Выводит сообщение, помещает протокол в хранилище и перезапускает игру
 * @param value параметр окончания игры: истекло время или кончились жизни
 */
function gameOver(value: string): void {
  stopTimer();
  const { toggleModal, selectTitleMenu } = useMenuStore();
  toggleModal();
  value === "lives limit"

    ? selectTitleMenu("Game over! Lives limit! Press OK to replay...")
    : value === "no moves"
    ? selectTitleMenu("Game over! No moves! Press OK to replay...")
    : selectTitleMenu("Game over! Time limit! Press OK to replay...");

  localStorage.setItem("protocol", JSON.stringify(getProtocol()));
  location.reload();
}

export default gameOver;
