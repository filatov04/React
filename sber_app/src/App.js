import React, { useRef, useState, useEffect } from "react";
import './style/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GenreContext } from "./hook/context";
import { createAssistant, createSmartappDebugger } from "@salutejs/client";
import Game from "./Components/Game";
import DifferentQuotes from "./Components/DifferentQuotes";
import Menu from "./Components/Menu";
import { useSpatnavInitialization } from "@salutejs/spatial";

function App() {
  const [character, setCharacter] = useState('sber');
  const [genre, setGenre] = useState("human");
  const [modalState, setModalState] = useState(false);
  const [assistantGenre, setAssistantGenre] = useState("");
  const [menuState, setMenuState] = useState(false);
  const [stateModalQuiz, setStateModalQuiz] = useState(false);
  const [answ, setAnsw] = useState(null);
  const [next, setNext] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scale, setScale] = useState(Array(30).fill({status: false, id: null}));

  useSpatnavInitialization();
  

  const initialize = (getState) => {
    if(process.env.NODE_ENV === 'development'){
      return createSmartappDebugger({
        token: process.env.REACT_APP_TOKEN ?? "",
        initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
        getState,
      });
    }
    else{
      return createAssistant({getState});
    }
  }


  const assistantStateRef = useRef();
  const assistantRef = useRef();

  useEffect(() => {
    assistantRef.current = initialize(() => assistantStateRef.current);
    assistantRef.current.on("data", (action) => {
      handleAssistantDataEvent(action)
    });
    assistantRef.current.on("command", (event) => {
      dispatchAssistantAction(event?.command);
    })
  }, [])

  const handleAssistantDataEventSmartAppData = (event) => {
    console.log('AssistantWrapper.handleAssistantEventSmartAppData: event:', event);

    if (event.sub !== undefined) {
      // this.emit('event-sub', event.sub);
      // /*await*/ this._App.handleAssistantSub(event.sub);
    }

    const action = event.action;
    dispatchAssistantAction(action);
  }

  const handleAssistantDataEvent = (event) => {
    switch (event?.type) {
      case "character":
        // notify(event.type);
        setCharacter(event.character?.id)
        break;
      case "sdk_answer":
        // notify(event.type);
        handleAssistantDataEventSmartAppData(event);
        break;

      case "smart_app_data":
        // notify(event.type);
        handleAssistantDataEventSmartAppData(event);
        break

      default:
        break
    }
  }

  function dispatchAssistantAction(action){
    console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case 'learn_quotes':
          return  learn_Quotes(action);
        case 'close_modal_window':
          return closeModalWindow(action);
        case 'choose_theme':
          return chooseTheme(action);
        case 'return_menu':
          return returnMenu(action);
        case 'attemptToQuiz':
          return attemptToQuiz();
        // case 'closeModalForQuiz':
        //   return closeModalQuiz();
        case 'Answer':
          return checkAnsw(action);
        case 'Next':
          return NextQuest(action);
        case 'MenuAfterGame':
          return MenuAfterGame(action);
        case 'ScaleQuote':
          return ScaleQuote(action);
        case 'CloseModalQuote':
          return closeModalQuote();
        default:
          throw new Error();
      }
    }
  }

  function closeModalQuote(){
    const afterPhrase = scale.map((o, index) => {
      return {...o, status: false, id: index}
    })
    setScale(afterPhrase);
  }

  function ScaleQuote(action){
    const id = parseInt(action.id, 10);
    const afterPhrase = scale.map((o, index) => {
      if(id - 1 === index){
        return {...o, status: true, id: index}
      }
      else{
        return {...o, status: false, id: index}
      }
    })
    setScale(afterPhrase);
  }

  function MenuAfterGame(action){
    setMenu(true);
  }

  function NextQuest(action){
    setNext(true);
  }

  function checkAnsw(action){
    switch(action.id){
      case "1":
        setAnsw(1);
        break;
      case "2":
        setAnsw(2);
        break;
      case "3":
        setAnsw(3);
        break;
      case "4":
        setAnsw(4);
        break;
      default:
        return console.log("hello");
    }
  }

  function closeModalQuiz(){
    setStateModalQuiz(false);
  }

  function attemptToQuiz(){
    setStateModalQuiz(true);
  }

  function returnMenu(action){
    setMenuState(true);
  }

  function chooseTheme(action){
    switch(action.id){
      case "1":
        setAssistantGenre("human");
        break;
      case "2":
        setAssistantGenre("peace");
        break;
      case "3":
        setAssistantGenre("war");
        break;
      case "4":
        setAssistantGenre("motivation");
        break;
      default:
        return console.log("hello");
    }
  }

  function learn_Quotes(action) {
    setModalState(true);
  }

  function closeModalWindow(action){
    setModalState(false);
    setStateModalQuiz(false);    
  }

  function assistant_global(n, state) {
    console.log(n, state)
    assistantRef.current.sendData({
      action: {
        action_id: state,
        parameters: {
          number: n
        }
      }
    })
  }

  return (
    <GenreContext.Provider value={{
      genre,
      setGenre
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Game assistant_global={assistant_global} menu={menu} setMenu={setMenu} next={next} setNext={setNext} setAnsw={setAnsw} answ={answ}/>}/>
          <Route path="/quotes" element={<DifferentQuotes assistant_global={assistant_global} scale={scale} setScale={setScale} setReturnMenuState={setMenuState} returnMenuState={menuState}/>}/>
          <Route path="/" element={<Menu assistant_global={assistant_global} modalQuiz={stateModalQuiz} setModalQuiz={setStateModalQuiz} state={modalState} setState={setModalState} setAssistantGenre={setAssistantGenre} AssistantGenre={assistantGenre}/>}/>
        </Routes> 
      </BrowserRouter>
    </GenreContext.Provider>
  );
}

export default App;
