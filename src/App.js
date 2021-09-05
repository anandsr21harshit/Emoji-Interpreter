import "./styles.css";
import { useState } from "react";

const emojiList = {
  "😀": "Smile",
  "😑": "Expressionless",
  "🤔": "Thinking",
  "😫": "Tired",
  "😎": "Smart",
  "😋": "Yummy",
  "🥱": "Yawn",
  "😂": "Laughing",
  "😞": "Disappointed",
  "😱": "Fearful"
};

let emojis = Object.keys(emojiList);

export default function App() {
  let [emoji, setEmoji] = useState("");
  let [meaning, setMeaning] = useState("Translation will be showed here...");

  function inputChangeHandler(event) {
    let value = event.target.value;
    setEmoji(value);

    if (value in emojiList) {
      setMeaning(emojiList[value]);
    } else {
      setMeaning("Not present in our database.");
    }
  }

  function clickEventHandler(inputEmoji) {
    setMeaning(emojiList[inputEmoji]);
  }

  return (
    <div className="App">
      <h1 id="header">Emoji Interpreter</h1>
      <input
        onChange={inputChangeHandler}
        placeholder="Search your emoji here.."
      ></input>

      <h3> {emoji}</h3>
      <h3>{meaning}</h3>

      {emojis.map((item) => (
        <span onClick={() => clickEventHandler(item)} id="emoticons">
          {item}
        </span>
      ))}

      <h3 id="quote"> Emoji speaks louder than words!😎 </h3>
    </div>
  );
}
