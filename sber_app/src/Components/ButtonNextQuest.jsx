import React from 'react';
import '../style/Game.css'

const ButtonNextQuest = (props) => {
  return (
    <div className='btn_nextQuest'>
        {props.state_btn
            ? <button className='check_answ' onClick={e => props.handleClick(e)}>Следующий вопрос</button>
            : <button className='check_unAnsw' disabled>Следующий вопрос</button>
        }
    </div>
  )
}

export default ButtonNextQuest;