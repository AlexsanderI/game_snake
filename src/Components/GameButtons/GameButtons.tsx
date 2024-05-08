import "../GameButtons/GameButton.css";
import PlayPause from "../Button/PlayPause";
import ReloadButton from "../Button/ReloadButton";
import Burger from "../Button/Burger";

function GameButtons() {
  return (
    <div className="game-button">
      <PlayPause />
      <ReloadButton />
      <Burger />
    </div>
  );
}

export default GameButtons;
