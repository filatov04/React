import React, { useState } from "react";
import '../style/Menu.css'
import ModalWindow from "./ModalWindow";
import { useNavigate } from "react-router-dom";

const  Menu = () => {
    const [modalActive1, setModalActive1] = useState(false);
    const [modalActive2, setModalActive2] = useState(false);
    return(
        <div className="Menu">
          <h1 className="name_app">
            ОТКРОВЕНИЯ УМОВ
          </h1>
          <div className="btn_main">
            <button className="btn" onClick={() => setModalActive1(true)}>Узнать новые цитаты</button>
            <button className="btn" onClick={() => setModalActive2(true)}>Пройти тест на знание цитат</button>
          </div>
          <ModalWindow active={modalActive1} setActive={setModalActive1}>
            <h2>Выберите категорию цитат:</h2>
            <button className="btnInModal" id="btnInModal1">Человек</button>
            <button className="btnInModal" id="btnInModal2">Жизнь</button>
            <button className="btnInModal" id="btnInModal3">Война</button>
            <button className="btnInModal" id="btnInModal4">Мотивация</button>
          </ModalWindow>
          <ModalWindow active={modalActive2} setActive={setModalActive2}>
            <h2>Выберите категорию цитат, по которой желаете пройити тестирование:</h2>
            <button className="btnInModal" id="btnInModal1">Человек</button>
            <button className="btnInModal" id="btnInModal2">Жизнь</button>
            <button className="btnInModal" id="btnInModal3">Война</button>
            <button className="btnInModal" id="btnInModal4">Мотивация</button>  
          </ModalWindow>
        </div>  
    )
}

export default Menu;