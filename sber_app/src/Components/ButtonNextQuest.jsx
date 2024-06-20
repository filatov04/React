import React, { useEffect } from 'react';
import '../style/Game.css'
import { spatnavInstance, useSection } from '@salutejs/spatial';


const ButtonNextQuest = (props) => {
  const [buttonNextQuest, customizeBtnNext] = useSection('BtnNextQuest');

  useEffect(() =>{
    if(props.state_btn){
      spatnavInstance.focus('BtnNextQuest');
    }
  },[props.state_btn]);

  return (
    <div {...buttonNextQuest} className='btn_nextQuest'>
        {props.state_btn
            ? <button className='sn-section-item check_answ' tabIndex={-1} onClick={() => props.handleClick(null, "nextQuest")}>Следующий вопрос</button>
            : <button className='check_unAnsw' disabled>Следующий вопрос</button>
        }
    </div>
  )
}

export default ButtonNextQuest;