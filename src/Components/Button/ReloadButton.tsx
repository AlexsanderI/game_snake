import { useState } from "react";
import "./ReloadButton.css"; // Подключаем стили

const ReloadButton: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false); // Состояние анимации

  const handleClick = () => {
    setIsAnimating(true); // Запустить анимацию
    setTimeout(() => setIsAnimating(false), 1000); // Остановить анимацию через 1 секунду
  };

  return (
    <button className="refresh-button" onClick={handleClick}>
      <i className={`fas fa-refresh ${isAnimating ? "fa-spin" : ""}`}></i>
    </button>
  );
};

export default ReloadButton;
