import React, { useState } from "react";
import './style/style.css';
import { arrayQuestionsQuotes } from "./function/createArray";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import { GenreContext } from "./hook/context";



function App() {
  const [genre, setGenre] = useState("human");
  return (
    <GenreContext.Provider value={{
      genre,
      setGenre
    }}>
      <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    </GenreContext.Provider>
  );
}

export default App;
