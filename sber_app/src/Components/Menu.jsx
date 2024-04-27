import React, { useState } from "react";
import '../style/style.css'
import ModalWindow from "./ModalWindow";

function Menu() {
    const [modalActive, setModalActive] = useState('true')
    return(
        <div className="Menu">
            <h1 style={{
            textAlign:"center",
            color: 'white',
            fontSize: '55px'
            }}>
            Откровения умов
          </h1>
          <div className="btn_main">
            <button className="btn" onClick={() => setModalActive(true)}>Узнать новые цитаты</button>
            <button className="btn">Пройти тест на знание цитат</button>
          </div>
          <ModalWindow active={modalActive} setActive={setModalActive}>
            <button className="btnInModal" id="btnInModal1">Человек</button>
            <button className="btnInModal" id="btnInModal2">Жизнь</button>
            <button className="btnInModal" id="btnInModal3">Война</button>
            <button className="btnInModal" id="btnInModal4">Мотивация</button>
          </ModalWindow>
        </div>  
    )
}

export default Menu;