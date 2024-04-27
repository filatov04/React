import React from "react";

const ModalWindow = ({active, setActive, children}) => {
    return(
        <div className={active ? "ModalWin active" : "ModalWin"} onClick={() => setActive(false)}>
            <div className={active ? "ModalCont active" : "ModalCont"} onClick={e => e.stopPropagation()}>
                <h1>Выберите категорию цитат</h1>
                {children}
            </div>
        </div>
    )
};

export default ModalWindow;