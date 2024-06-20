import React, { useEffect, useState } from "react";
import '../style/Game.css';
import { spatnavInstance, useSection } from '@salutejs/spatial';
import ModalWindow from './ModalWindow';
import '../style/ButtonRes.css';


const ButtonResult = ({state_btnMenu, setModalRes, res, correctAnswers, handleClick}) =>{
    const [btnMenuSection, customizeBtnMenu] = useSection('btnMenu');
    const [btnResultSection, customizeRes] = useSection('btnRes');
    const [modalWindowRes, setModalWindowRes] = useState(false);

    useEffect(() =>{
        if(state_btnMenu){
          spatnavInstance.focus('btnMenu');
        }
      },[state_btnMenu])
    
    useEffect(() =>{
        setModalWindowRes(res);
        console.log('showres')
        if(res){
          customizeRes({
            disabled: false,
          });
          customizeBtnMenu({
            disabled: true,
          })
          spatnavInstance.focus('btnRes');
        }
        else{
          customizeRes({
            disabled: true,
          });
          customizeBtnMenu({
            disabled: false,
          })
          spatnavInstance.focus('btnMenu');
        }
      }, [res])

    function getComment() {
        if (correctAnswers < 4) {
          return "Не стоит огорчаться, если результат небольшой. Это отличный повод узнать цитаты более тщательно!";
        } else if (correctAnswers < 7) {
          return "Вы проявили неплохие знания, но есть еще, что можно изучить. Продолжайте узнавать новое!";
        } else if (correctAnswers < 10) {
          return "Вы хорошо знаете мифологию, но есть несколько ошибок. Попробуйте еще раз!";
        } else {
          return "Безупречный результат! Вы отлично разбираетесь в мифологии!";
        }
      }

    return(
        <div className="mainDivBtnRes">
            <div {...btnMenuSection} className="divBtnRes">
              <button className='sn-section-item check_answ' tabIndex={-1} onClick={() => handleClick(null, "show_res")}>Результат</button>
            </div>
            <ModalWindow setActive={setModalWindowRes} active={modalWindowRes} assistant_global={handleClick} setModalState={setModalRes}>
              <div {...btnResultSection} className="divModalRes">
                <h1 style={{display:'block'}}>{getComment()}</h1>
                <h1 style={{display:'block'}}>Верных ответов</h1>
                <h1 style={{display:'block'}}>
                  {correctAnswers + " из " + 10}
                </h1>
                <button className='sn-section-item btnMenuAfterGame' tabIndex={-1} onClick={() => handleClick(null, "returnMenuAfterGame")}>Главное меню</button>
              </div>
            </ModalWindow>
        </div>
    )
}

export default ButtonResult;