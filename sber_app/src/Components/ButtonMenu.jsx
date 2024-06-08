import React from 'react';
import '../style/Game.css';


const ButtonMenu = (props) => {
  return (
    <div className='btn_nextQuest'>
        {props.state_btnMenu
        ? <button className='check_answ' onClick={() => props.handleClick(null, "returnMenuAfterGame")}>Вернуться в главное меню</button>
        : <button className='check_unAnsw' disabled>Вернуться в главное меню</button>
    }
    </div>
  )
}

export default ButtonMenu;