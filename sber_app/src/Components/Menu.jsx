import React, { useContext, useEffect, useState, useRef } from "react";
import '../style/Menu.css'
import ModalWindow from "./ModalWindow";
import { useNavigate } from "react-router-dom";
import { GenreContext } from "../hook/context";
import closeButtonImage from "../jpg/closeButton2.png";
import {getCurrentFocusedElement, spatnavInstance, useSection } from "@salutejs/spatial";


const  Menu = ({assistant_global, state, setState, AssistantGenre, setAssistantGenre, modalQuiz, setModalQuiz}) => {
    const router = useNavigate();
    const [modalActive1, setModalActive1] = useState(false);
    const [modalActive2, setModalActive2] = useState(false);
    const {genre, setGenre} = useContext(GenreContext);


    const [sectionProps, customize1] = useSection('allInteface');
    const [sectionProps2, customize2] = useSection('btnForQuote');
    const [sectionProps3, customize3] = useSection('btnMenu');
    const [sectionProps4, customize4] = useSection('btnForQuiz');

    useEffect(() => {
      const intervalId = setInterval(() => {
        const focusedElement = getCurrentFocusedElement();
        console.log("Focused element:", focusedElement);
      }, 5000); // 5000 миллисекунд = 5 секунд

      // Очистка интервала при размонтировании компонента
      return () => clearInterval(intervalId);
    }, []);

    

    useEffect(() => {
      setModalActive1(state);
      if(state){
        customize3({ //btnMenu
          disabled:true,
        })
        customize2({ //btnForQuote
          disabled:false,
        })
        customize4({ //btnForQuiz
          disabled:true,
        })
        spatnavInstance.focus('btnForQuote');
      }
      else{
        customize2({ //btnForQuote
          disabled:true, 
        })
        customize4({ //btnForQuiz
          disabled:true,
        })
        customize3({ //btnMenu
          disabled:false,
        })
        spatnavInstance.focus('btnMenu');
      }
    }, [state])

    useEffect(() => {
      setModalActive2(modalQuiz);
      if(modalQuiz){
        customize3({ //btnMenu
          disabled:true,
        })
        customize2({ //btnForQuote
          disabled:true,
        })
        customize4({ //btnForQuiz
          disabled:false,
        })
        spatnavInstance.focus('btnForQuiz');
      }
      else{
        customize2({ //btnForQuote
          disabled:true,
        })
        customize4({ //btnForQuiz
          disabled:true,
        })
        customize3({ //btnMenu
          disabled:false,
        })
        spatnavInstance.focus('btnMenu');
      }
    }, [modalQuiz])

    useEffect(() =>{
      setGenre(AssistantGenre);
      if(AssistantGenre !== ""){
        if(modalQuiz){
          router('/game');
          setAssistantGenre("");
          setModalQuiz(false);
          assistant_global(null, "suggestQuiz");
        }
        if(state){
          router('/quotes')
          setAssistantGenre("");
          setState(false);
          assistant_global(null, "suggestQuote");
        }
      }
    }, [AssistantGenre]);

    return(
      <div {...sectionProps} className="sn-section-root Menu">
        <h1 className="name_app">
          ОТКРОВЕНИЕ УМОВ
        </h1>
        <div {...sectionProps3} className="btn_main">
          <button className="sn-section-item btn" id="1" tabIndex={-1}  onClick={() => assistant_global(null, "learnQuotes")}>Узнать новые цитаты</button>
          <button className="sn-section-item btn" id="2" tabIndex={-1}  onClick={() => assistant_global(null, "attemptToQuiz")}>Пройти тест на знание цитат</button>
        </div>
        <ModalWindow assistant_global={assistant_global} active={modalActive1} setActive={setModalActive1} setModalState={setState}>
          <div {...sectionProps2} style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
            <h2 style={{fontSize: '2.5vw'}}>Выберите тему цитат:</h2>
            <button className="sn-section-item btnInModal" tabIndex={-1} id="btnInModal1" onClick={() => assistant_global("Человек", "chooseTheme")}>Человек</button>
            <button className="sn-section-item btnInModal" tabIndex={-1} id="btnInModal2" onClick={() => assistant_global("Жизнь", "chooseTheme")}>Жизнь</button>
            <button className="sn-section-item btnInModal" tabIndex={-1} id="btnInModal4" onClick={() => assistant_global("Мотивация", "chooseTheme")}>Мотивация</button>
            <button className="sn-section-item closeButton" tabIndex={-1} onClick={() => assistant_global(null, "closeModalForLearn")}>
              <img className="closeButtonIImage" src={closeButtonImage}/>
            </button>
          </div>
        </ModalWindow>
        <ModalWindow assistant_global={assistant_global} active={modalActive2} setActive={setModalActive2} setModalState={setModalQuiz}>
          <div {...sectionProps4} style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
            <h2 style={{fontSize: '2.5vw'}}>Выберите категорию цитат, по которой желаете пройти тестирование:</h2>
            <button className="sn-section-item btnInModal" tabIndex={-1} id="btnInModal1" onClick={() => assistant_global("Человек", "chooseTheme")}>Человек</button>
            <button className="sn-section-item btnInModal" tabIndex={-1} id="btnInModal2" onClick={() => assistant_global("Жизнь", "chooseTheme")}>Жизнь</button>
            <button className="sn-section-item btnInModal" tabIndex={-1} id="btnInModal4" onClick={() => assistant_global("Мотивация", "chooseTheme")}>Мотивация</button>
            <button className="sn-section-item closeButton" tabIndex={-1} onClick={() => assistant_global(null, "closeModalForLearn")}>
              <img className="closeButtonIImage" src={closeButtonImage}/>
            </button>
          </div>  
        </ModalWindow>
      </div>
    )
}

export default Menu;