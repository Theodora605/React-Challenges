import { useEffect, useRef, useState } from "react";
import "./MaxCount.css";

export const MaxCount = () => {
  const [count, setCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const intervalId = useRef(0);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 1);
    }, 1000);
    return () => clearInterval(intervalId.current);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      return clearInterval(intervalId.current);
    }
  }, [timeRemaining]);

  return (
    <div className="main">
      <p>No of clicks until timer expires</p>
      <div className="counter-area">
        <div className="counter">
          <p>{count}</p>
        </div>
        <div className="input-area">
          Time left: {timeRemaining} seconds
          {timeRemaining !== 0 && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setCount((count) => count + 1);
              }}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
