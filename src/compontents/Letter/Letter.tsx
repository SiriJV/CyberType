import "./Letter.scss";

const Letter = ({ char, typedChar, isCurrent }) => {
  let className = "letter";
  
  if (typedChar !== undefined) {
    className += typedChar === char ? " correct" : " incorrect";
  }

  return <span className={className}>{char}</span>;
};

export default Letter;
