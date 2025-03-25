import './TypingArea.scss';

// const TypingArea = () => {
//     return (
//         <>
//             <p className="typing-area">also fox long people in the house tall never been enough to be alas the golden in forest pot of money that out road example for it to work quality grass water this before home tent torch also fox long people in the house tall never been enough to be alas the golden in forest pot of money that out road example for it to work quality grass water this before home tent torch</p>
//         </>
//     )
// }

// export default TypingArea;

import React, { useState, useEffect } from "react";
import { getRandomWords } from "../../utils/wordGenerator";
import "./TypingArea.scss"; // Styla senare

const TypingArea = () => {
  const [words, setWords] = useState(getRandomWords(100)); // 100 random ord
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [typedWords, setTypedWords] = useState([]);

  useEffect(() => {
    if (typedWords.length > 0 && typedWords.length % 2 === 0) {
      // När två rader är klara, flytta fram orden
      setWords((prevWords) => prevWords.slice(typedWords.length));
    }
  }, [typedWords]);

  const handleInput = (e) => {
    const value = e.target.value;
    if (value.endsWith(" ")) {
      // När användaren trycker på SPACE
      const word = value.trim();
      if (word === words[currentIndex]) {
        setTypedWords([...typedWords, { word, correct: true }]);
      } else {
        setTypedWords([...typedWords, { word, correct: false }]);
      }
      setInput(""); // Reset input
      setCurrentIndex(currentIndex + 1);
    } else {
      setInput(value);
    }
  };

  return (
    <div className="typing-area">
      <div className="words">
        {words.slice(0, 3).map((word, index) => (
          <span key={index} className={index === 1 ? "active-line" : ""}>
            {word}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        autoFocus
      />
    </div>
  );
};

export default TypingArea;
