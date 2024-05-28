import React, { useContext, useEffect, useReducer, useState } from "react";
import '../style/Menu.css'
import ModalWindow from "./ModalWindow";
import { useNavigate } from "react-router-dom";
import { GenreContext } from "../hook/context";

const  Menu = ({state, setState, AssistantGenre, setAssistantGenre, modalQuiz, setModalQuiz}) => {
    const router = useNavigate();
    const [modalActive1, setModalActive1] = useState(false);
    const [modalActive2, setModalActive2] = useState(false);
    const {genre, setGenre} = useContext(GenreContext);
    //console.log(genre)

    useEffect(() => {
      setModalActive1(state);
    }, [state])

    useEffect(() => {
      setModalActive2(modalQuiz);
    }, [modalQuiz])

    useEffect(() =>{
      setGenre(AssistantGenre);
      if(AssistantGenre !== ""){
        if(modalQuiz){
          router('/game');
          setAssistantGenre("");
          setModalQuiz(false);
        }
        if(state){
          router('/quotes')
          setAssistantGenre("");
          setState(false);
        }
      }
    }, [AssistantGenre]);

    const HandleClick = (e) => {
      setGenre(e);
      router('/quotes');
    }

    const HandleClickQuiz = (e) => {
      setGenre(e);
      router('/game');
    }

    return(
      <div className="Menu">
          <h1 className="name_app">
            ОТКРОВЕНИЕ УМОВ
          </h1>
          <div className="btn_main">
            <button className="btn" onClick={() => setModalActive1(true)}>Узнать новые цитаты</button>
            <button className="btn" onClick={() => setModalActive2(true)}>Пройти тест на знание цитат</button>
          </div>
          <ModalWindow active={modalActive1} setActive={setModalActive1} setModalState={setState}>
            <h2>Выберите тему цитат:</h2>
            <button className="btnInModal" id="btnInModal1" onClick={() => HandleClick("human")}>Человек</button>
            <button className="btnInModal" id="btnInModal2" onClick={() => HandleClick("peace")}>Жизнь</button>
            <button className="btnInModal" id="btnInModal3" onClick={() => HandleClick("war")}>Война</button>
            <button className="btnInModal" id="btnInModal4" onClick={() => HandleClick("motivation")}>Мотивация</button>
          </ModalWindow>
          <ModalWindow active={modalActive2} setActive={setModalActive2} setModalState={setModalQuiz}>
            <h2>Выберите категорию цитат, по которой желаете пройти тестирование:</h2>
            <button className="btnInModal" id="btnInModal1" onClick={() => HandleClickQuiz("human")}>Человек</button>
            <button className="btnInModal" id="btnInModal2" onClick={() => HandleClickQuiz("peace")}>Жизнь</button>
            <button className="btnInModal" id="btnInModal3" onClick={() => HandleClickQuiz("war")}>Война</button>
            <button className="btnInModal" id="btnInModal4" onClick={() => HandleClickQuiz("motivation")}>Мотивация</button>  
          </ModalWindow>
      </div>   
    )
}

export default Menu;