import "./PauseButton.css";
import { usePauseStore } from "../../store/menuStore";
import { swapPause } from "../../engine/events/pauseEvent";
import { stopTimer } from "../../engine/time/isTimer";
import handleKeyDown from "./handleKeyDown";

function PauseButton() {
  const { isPause, togglePause } = usePauseStore();

  const togglePlayPause = () => {
    togglePause();
    swapPause();
    stopTimer();
  };

  return (
    <button
      className="play-button"
      onClick={togglePlayPause}
      onKeyDown={handleKeyDown}
    >
      <i className={`fas fa-duotone  ${isPause ? "fa-pause" : "fa-play"}`}></i>
    </button>
  );
}

export default PauseButton;