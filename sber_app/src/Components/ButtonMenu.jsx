import React, { useEffect, useState } from 'react';
import '../style/Game.css';
import { spatnavInstance, useSection } from '@salutejs/spatial';
import ButtonResult from './ButtonResult';


const ButtonMenu = ({setModalRes, res, state_btnMenu, correctAnswers, handleClick}) => {
  const [rootSection, customizeRoot] = useSection('main');
  
  return (
    <div {...rootSection} className='sn-section-root btn_nextQuest'>
        {state_btnMenu 
          ? <ButtonResult state_btnMenu={state_btnMenu} setModalRes={setModalRes} res={res} correctAnswers={correctAnswers} handleClick={handleClick}/>
          : <button className='check_unAnsw' disabled>Результат</button>
        }
    </div>
  )
}

export default ButtonMenu;