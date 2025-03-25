import React from "react";
import "./TypingStats.scss";

const TypingStats = ({ mode, remaining, wpm, accuracy }) => {
  return (
    <article className="typing-stats">
      <div className="stat">
        <span className="label">WPM: </span>
        <span className="value">{wpm ?? "0"}</span>
      </div>
      <div className="stat">
        <span className="label">Accuracy: </span>
        <span className="value">{accuracy ?? "0"}%</span>
      </div>
    </article>
  );
};

export default TypingStats;
