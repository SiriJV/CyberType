// const wordsList = [
//     "hello", "world", "react", "keyboard", "speed", "test", "game", "random", "javascript", "typing",
//     "code", "challenge", "developer", "function", "variable", "screen", "monitor", "debug", "browser",
//     "syntax", "array", "object", "event", "handler", "component", "props", "state"
//   ];
  
//   export const getRandomWords = (count = 50) => {
//     let words = [];
//     for (let i = 0; i < count; i++) {
//       const randomIndex = Math.floor(Math.random() * wordsList.length);
//       words.push(wordsList[randomIndex]);
//     }
//     return words;
//   };
  

const wordsList = [
  "hello", "world", "to", "if", "when", "they", "speed", "home",
  "and", "never", "practice", "for", "people", "since",
  "when", "always", "party", "lonely", "instead", "forget", "on", "the",
  "house", "go", "inside", "custom", "something", "hyper"
];

export const getRandomWords = (count: number): string[] => {
  return Array.from({ length: count }, () => {
    return wordsList[Math.floor(Math.random() * wordsList.length)];
  });
};

export default wordsList;
