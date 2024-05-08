import React, { useState } from "react";
import './styles/App.css'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/UI/Navbar/Navbar";
import AppRouter from "./Components/AppRouter";
import { AuthContext } from "./context/context";

function App(){
  const [isAuth,  setIsAuth] = useState(false);
  return(
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
      <Navbar/>
      <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;