import "./styles.css";
import { useState } from "react";
import useKeypress from "./useKeypress";

export default function App() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const words = [
    "LIGHT",
    "light",
    "BITCH",
    "KITTY",
    "PERKY",
    "MOUNT",
    "WHACK",
    "GROSS"
  ];
  const [chosenWord] = useState(words[1]);
  const wordLetter = chosenWord.split("");

  const onKeyPressed = (key) => {
    
    if (key === "Enter") {
      if (text.length !== 5) {
        alert("Need more letters");
        setIndex(index+1);
        alert(index);
      } else if (!words.includes(text)) {
        alert("Try again");
        setIndex(index+1);
        alert(index);
      } else if (text === chosenWord) {
        alert("You win");
        setIndex(0);
      }
    } else if (key === "Backspace") {
      setText(text.substring(0, text.length - 1));
    } else if (text.length >= 5) {
      return;
    } else {
      setText(text + key);
    }
  };

  useKeypress(onKeyPressed);

  const GuessR = ({ text , index }) => {
    const letters = text.split("");
    return (
      <div className="row">
        <div className="box0">{letters[0]}</div>
        <div className="box1">{letters[1]}</div>
        <div className="box2">{letters[2]}</div>
        <div className="box3">{letters[3]}</div>
        <div className="box4">{letters[4]}</div>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Wordle v2.0 </h1>
      <h2>Electric Boogaloo</h2>
      <GuessR text={text} index={0}/>
      <GuessR text={text} index={1}/>
      <GuessR text={text} index={2}/>
      <GuessR text={text} index={3}/>
      <GuessR text={text} index={4}/>
      <GuessR text={text} index={5}/>
    </div>
  );
}
