import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import setLevelEvent from "./engine/events/setLevelEvent.ts";
import keyboardEvents from "./engine/events/keyboardEvents.ts";

setLevelEvent(1);

document.addEventListener("keydown", keyboardEvents);

let lastY = 1;
document.addEventListener(
  "touchmove",
  function (event) {
    const lastS = document.documentElement.scrollTop;
    if (
      lastS == 0 &&
      lastY - event.touches[0].clientY < 0 &&
      event.cancelable
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
    lastY = event.touches[0].clientY;
  },
  { passive: false }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
