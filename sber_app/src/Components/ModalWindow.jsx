import React, { useState } from "react";
import '../style/Menu.css'

const ModalWindow = ({active, setModalState, setActive, children}) => {

    const [array, setArray] = useState(Array(30).fill({status: false, id: null}))

    const setState = () => {
        if(Object.keys(setModalState).length === 2){
            console.log('2')
            //setModalState.setScale(array);
        }
        else{
            console.log('1')
            setModalState(false);
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