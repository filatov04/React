import React, { useEffect, useState } from "react";
import '../style/Menu.css'

const ModalWindow = ({assistant_global, active, setModalState, setActive, children}) => {
    
    const setState = () => {
        if(Object.keys(setModalState).length === 2){
            console.log('2')
            //setModalState.setScale(array);
            assistant_global(null, "closeQuoteModal");
        }
        else{
            console.log('1')
            //setModalState(false);
            assistant_global(null, "closeModalForLearn");
        }
    }

    return(
        <div className={active ? "ModalWin active" : "ModalWin" } onClick={() => {setActive(false); setState()}}>
            <div className={active ? "ModalCont active" : "ModalCont"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default ModalWindow;