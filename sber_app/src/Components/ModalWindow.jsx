import React from "react";
import '../style/Menu.css'

const ModalWindow = ({active, setModalState, setActive, children}) => {
    return(
        <div className={active ? "ModalWin active" : "ModalWin" } onClick={() => {setActive(false); setModalState(false)}}>
            <div className={active ? "ModalCont active" : "ModalCont"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default ModalWindow;