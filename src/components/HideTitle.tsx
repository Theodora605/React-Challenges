//import "./HideTitle.css";

import { useState } from "react";

export const HideTitle = () => {
  const [showText, setShowText] = useState(true);

  return (
    <div className="container" style={{ display: "inline-flex" }}>
      <div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            setShowText(!showText);
          }}
        >
          Show / Hide
        </button>
      </div>
      <div>
        {showText && (
          <h1 style={{ marginLeft: "10px" }}>Welcome to React Challenges</h1>
        )}
      </div>
    </div>
  );
};
