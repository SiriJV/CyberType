const wordsList = [
    "hello", "world", "react", "keyboard", "speed", "test", "game", "random", "javascript", "typing",
    "code", "challenge", "developer", "function", "variable", "screen", "monitor", "debug", "browser",
    "syntax", "array", "object", "event", "handler", "component", "props", "state"
  ];
  
  export const getRandomWords = (count = 50) => {
    let words = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * wordsList.length);
      words.push(wordsList[randomIndex]);
    }
    return words;
  };
  