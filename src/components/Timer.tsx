import { useState } from "react";
import "./Timer.css";

export const Timer = () => {
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [timerId, setTimerId] = useState(-1);

  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {Math.floor(timeSeconds / 60)} mins</span>
      <span> {timeSeconds % 60} secs</span>
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            if (timerId === -1) {
              clearInterval(timerId);
              setTimerId(
                setInterval(() => {
                  setTimeSeconds((timeSeconds) => timeSeconds + 1);
                }, 1000)
              );
            }
          }}
        >
          Start
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            clearInterval(timerId);
            setTimerId(-1);
          }}
        >
          Stop
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            setTimeSeconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
