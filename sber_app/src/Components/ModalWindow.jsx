import React from "react";
import '../style/Menu.css'

const ModalWindow = ({active, setActive, children}) => {
    return(
        <div className={active ? "ModalWin active" : "ModalWin" } onClick={() => setActive(false)}>
            <div className={active ? "ModalCont active" : "ModalCont"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default ModalWindow;