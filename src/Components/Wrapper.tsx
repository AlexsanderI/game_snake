// import React, { useRef, useEffect } from "react";
import { ReactNode } from "react";
import GameDetails from "./GameDetails";
// import handleSwipeEvent from "../engine/events/handleSwipeEvent";

function Wrapper({ children }: { children: ReactNode }) {
  // const wrapperRef = useRef(null);

  // useEffect(() => {
  //   if (wrapperRef.current) {
  //     // Ваш код обработки
  //     console.log(wrapperRef.current);
  //   }
  // }, []);

  // const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
  //   handleSwipeEvent(e); // Вызываем пользовательскую функцию обработки свайпа
  // };

  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log(e);
    // const firstTouch = e.touches[0];
    // x1 = firstTouch.clientX;
    // y1 = firstTouch.clientY;
  };

  const touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div className="wrapper" onTouchStart={touchStart} onTouchEnd={touchEnd}>
      <GameDetails />
      {children}
    </div>
  );
}

export default Wrapper;
