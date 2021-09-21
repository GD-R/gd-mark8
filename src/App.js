import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😉": "Winking",
  "🥵": "Hot-face",
  "🥶": "Cold-face",
  "😊": "Smile",
  "😟": "sad",
  "😴": "Sleeping",
  "😗": "Kissing",
  "😕": "Confused",
  "💗": "Heart"
};

const arrEmoji = Object.keys(emojiDict);

export default function App() {
  let [emoji, setEmoji] = useState("");
  let [txt, setTxt] = useState("translation will appear here..");

  function action(event) {
    let userInput = event.target.value;
    emoji = emojiDict[userInput];
    setEmoji(userInput);
    if (emoji === undefined) {
      setTxt("This is not in our Database");
    } else {
      setTxt(emoji);
    }
  }

  function clickEmoji(userInput) {
    setTxt(emojiDict[userInput]);
  }

  return (
    <div className="App">
      <h1>Emoji World</h1>
      <input placeholder="Enter the Emoji" onChange={action} />
      <h3>{emoji}</h3>
      <h3>{txt}</h3>
      {arrEmoji.map((item) => (
        <span onClick={() => clickEmoji(item)}>{item}</span>
      ))}
    </div>
  );
}
