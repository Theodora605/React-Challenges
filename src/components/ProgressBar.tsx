import { useState } from "react";
import "./ProgressBar.css";

export const ProgressBar = () => {
  const [progressPercent, setProgressPercent] = useState(50);

  return (
    <div className="main">
      <h1>Progress Bar</h1>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          style={{ width: `${progressPercent}%` }}
          role="progressbar"
        >
          {progressPercent}%
        </div>
      </div>
      <form className="horizontal-form">
        <label>Input Percentage:</label>
        <input
          className="percent-input"
          type="number"
          onChange={(e) => {
            let value = Number.parseInt(e.currentTarget.value);
            if (!isNaN(value)) {
              value = Math.min(value, 100);
              value = Math.max(value, 0);
              setProgressPercent(value);
            } else {
              setProgressPercent(0);
            }
          }}
        />
      </form>
    </div>
  );
};
