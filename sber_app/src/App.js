import React from "react";
import './style/style.css';
import Menu from "./Components/Menu";
import DifferentQuotes from "./Components/DifferentQuotes";
import Game from "./Components/Game";
import { arrayQuestionsQuotes } from "./function/createArray";



function App() {
  //console.log(arrayQuestionsQuotes());
  return (
    <Game/>
  );
}

export default App;
