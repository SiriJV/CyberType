import React, { useState } from "react";
import "./TestModeSelector.scss";

const TypingModeSelector = () => {
  const [mode, setMode] = useState("time");
  const [subOption, setSubOption] = useState(null);
  const [customText, setCustomText] = useState("");

  const options = {
    time: ["15s", "30s", "60s"],
    words: ["25", "50", "100"],
    quote: ["Short", "Medium", "Long"],
    custom: [],
  };

  return (
    <section className="typing-mode-selector">
      <article className="options">
        {Object.keys(options).map((option) => (
          <>
          <button
            key={option}
            className={`option-button ${mode === option ? "active" : ""}`}
            onClick={() => {
              setMode(option);
              setSubOption(null);
            }}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
          </>
        ))}
      </article>
      <article className="sub-options">
        {mode !== "custom" ? (
          options[mode].map((opt) => (
            <button
              key={opt}
              className={`sub-option-button ${subOption === opt ? "active" : ""}`}
              onClick={() => setSubOption(opt)}
            >
              {opt}
            </button>
          ))
        ) : (
          <input
            type="text"
            placeholder="Enter custom text (max 200 characters)"
            value={customText}
            onChange={(e) => setCustomText(e.target.value.slice(0, 200))}
            className="custom-input"
          />
        )}
      </article>
    </section>
  );
};

export default TypingModeSelector;
