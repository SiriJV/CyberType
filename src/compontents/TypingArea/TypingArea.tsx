import React, { useState, useEffect } from "react";
import wordsList from "../../utils/wordGenerator";
import Word from "../Word/Word";
import "./TypingArea.scss";

const getRandomWords = (count: number) => {
  return Array.from({ length: count }, () =>
    wordsList[Math.floor(Math.random() * wordsList.length)]
  );
};

const TypingArea = () => {
  const [rows, setRows] = useState([
    getRandomWords(10), 
    getRandomWords(10),
    getRandomWords(10),
  ]);
  const [input, setInput] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedHistory, setTypedHistory] = useState<string[]>([]);
  const [isFirstRowActive, setIsFirstRowActive] = useState(true); 

  useEffect(() => {
    if (currentWordIndex >= rows[isFirstRowActive ? 0 : 1].length) {
      shiftRows();
    }
  }, [currentWordIndex]);

  const shiftRows = () => {
    if (isFirstRowActive) {
      setIsFirstRowActive(false);
      setTypedHistory([]);
      setCurrentWordIndex(0); 
    } else {
      setRows((prevRows) => [
        prevRows[1], 
        prevRows[2], 
        getRandomWords(10), 
      ]);
      setTypedHistory([]); 
      setCurrentWordIndex(0);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const activeRowIndex = isFirstRowActive ? 0 : 1;
    const currentWord = rows[activeRowIndex][currentWordIndex];

    if (value.endsWith(" ")) {
      setTypedHistory([...typedHistory, value.trim()]);
      setCurrentWordIndex(currentWordIndex + 1);
      setInput("");
    } else {
      setInput(value);
    }
  };

  return (
    <section className="typing-area">
        <article className="remaining">0/100</article>
      <div className="words-container">
        <div className={`row ${isFirstRowActive ? "active-row" : "completed-row"}`}>
          {rows[0].map((word, index) => (
            <Word
              key={`first-${index}`}
              word={word}
              typed={isFirstRowActive ? (index === currentWordIndex ? input : typedHistory[index] || "") : ""}
            />
          ))}
        </div>

        <div className={`row ${isFirstRowActive ? "upcoming-row" : "active-row"}`}>
          {rows[1].map((word, index) => (
            <Word
              key={`second-${index}`}
              word={word}
              typed={!isFirstRowActive ? (index === currentWordIndex ? input : typedHistory[index] || "") : ""}
            />
          ))}
        </div>

        <div className="row upcoming-row">
          {rows[2].map((word, index) => (
            <Word key={`third-${index}`} word={word} typed="" />
          ))}
        </div>
      </div>

      <input
        type="text"
        value={input}
        onChange={handleInput}
        autoFocus
        className="typing-input"
      />
    </section>
  );
};

export default TypingArea;
