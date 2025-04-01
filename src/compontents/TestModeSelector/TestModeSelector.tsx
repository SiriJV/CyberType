import React, { useState } from "react";
import "./TestModeSelector.scss";

const options = {
  time: [
    { id: "t-15", label: "15s" },
    { id: "t-30", label: "30s" },
    { id: "t-60", label: "60s" },
  ],
  words: [
    { id: "w-25", label: "25" },
    { id: "w-50", label: "50" },
    { id: "w-100", label: "100" },
  ],
  quote: [
    { id: "q-short", label: "Short" },
    { id: "q-medium", label: "Medium" },
    { id: "q-long", label: "Long" },
  ],
  custom: [],
};

const TypingModeSelector = () => {
  const [mode, setMode] = useState<keyof typeof options>("time");
  const [subOption, setSubOption] = useState<string | null>(null);
  const [customText, setCustomText] = useState("");

  return (
    <section className="typing-mode-selector">
      <article className="options">
        {Object.keys(options).map((option) => (
          <button
            key={option}
            className={`option-button ${mode === option ? "active" : ""}`}
            onClick={() => {
              setMode(option as keyof typeof options);
              setSubOption(null);
            }}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </article>

      <article className="sub-options">
        {mode !== "custom" ? (
          options[mode].map((opt) => (
            <button
              key={opt.id}
              className={`sub-option-button ${subOption === opt.label ? "active" : ""}`}
              onClick={() => setSubOption(opt.label)}
            >
              {opt.label}
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
