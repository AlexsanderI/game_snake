// PlayPause.js
import { useState } from "react";
import "../Button/PlayPause.css";

function PlayPause() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // const handleKeyPress = (event: { key: unknown }) => {
  //   if (event.key === " ") {
  //     togglePlayPause(); // Вызываем функцию переключения play/pause
  //   }
  // };

  return (
    <button className="play-button" onClick={togglePlayPause}>
      <i
        className={`fas fa-duotone  ${isPlaying ? "fa-play" : "fa-pause"}`}
      ></i>
    </button>
    // <div
    //   className={`playpause ${isPlaying ? "playing" : ""}`}
    //   onClick={togglePlayPause}
    //   onKeyDown={handleKeyPress} // Добавляем обработчик события нажатия клавиши
    //   tabIndex={0} // Делаем элемент фокусируемым для обработки клавиш
    // >
    //   <div className="button"></div>
    // </div>
  );
}

export default PlayPause;
