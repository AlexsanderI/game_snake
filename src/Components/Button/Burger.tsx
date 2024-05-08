import React, { useState } from "react";
import "../Button/Burger.css";

const Burger: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button className="burger-button" onClick={handleClick}>
      <i className={`fas fa-solid  ${isActive ? "fa-bars" : "fa-xmark"}`}></i>
    </button>
    // <div className={`box ${isActive ? "not-active" : "active"}`}>
    //   <div className="btn" onClick={handleClick}>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //   </div>
    // </div>
  );
};

export default Burger;
