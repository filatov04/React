import React, { useState } from "react";
import '../style/Menu.css'
import ModalWindow from "./ModalWindow";
import { useNavigate } from "react-router-dom";

const  Menu = () => {
    const [modalActive, setModalActive] = useState(false);
    return(
        <div className="Menu">
          <h1 className="name_app">
            ОТКРОВЕНИЯ УМОВ
          </h1>
          <div className="btn_main">
            <button className="btn" onClick={() => setModalActive(true)}>Узнать новые цитаты</button>
            <button className="btn">Пройти тест на знание цитат</button>
          </div>
          <ModalWindow active={modalActive} setActive={setModalActive}>
            <h2>Выберите категорию цитат:</h2>
            <button className="btnInModal" id="btnInModal1">Человек</button>
            <button className="btnInModal" id="btnInModal2">Жизнь</button>
            <button className="btnInModal" id="btnInModal3">Война</button>
            <button className="btnInModal" id="btnInModal4">Мотивация</button>
          </ModalWindow>
        </div>  
    )
}

export default Menu;