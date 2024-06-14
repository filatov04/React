import React, { useEffect } from 'react';
import '../style/Game.css';
import { spatnavInstance, useSection } from '@salutejs/spatial';


const ButtonMenu = (props) => {
  const [btnMenuSection, customizeBtnMenu] = useSection('btnMenu');
  
  useEffect(() =>{
    if(props.state_btnMenu){
      spatnavInstance.focus('btnMenu');
    }
  },[props.state_btnMenu])

  return (
    <div {...btnMenuSection} className='sn-section-root btn_nextQuest'>
        {props.state_btnMenu
        ? <button className='sn-section-item check_answ' tabIndex={-1} onClick={() => props.handleClick(null, "returnMenuAfterGame")}>Главное меню</button>
        : <button className='check_unAnsw' disabled>Главное меню</button>
    }
    </div>
  )
}

export default ButtonMenu;