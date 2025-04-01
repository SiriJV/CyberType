// import React from "react";
import "./Word.scss";

const Word = ({ word, typed }: { word: string; typed: string }) => {
  return (
    <span className="word">
      {word.split("").map((letter, index) => {
        let status = "";
        if (index < typed.length) {
          status = letter === typed[index] ? "correct" : "incorrect";
        }
        return (
          <span key={index} className={`letter ${status}`}>
            {letter}
          </span>
        );
      })}
    </span>
  );
};

export default Word;
