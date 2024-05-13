import React, { useEffect, useState } from 'react';
import data from '../data/quotes';
import '../function/createArray';
import { arrayQuestionsQuotes } from '../function/createArray';
import '../style/Game.css';
import ButtonNextQuest from './ButtonNextQuest';
import ButtonMenu from './ButtonMenu';

const Game = () => {
    //rgb(255,36,0)- неверный ответ  rgb(0, 238, 4) - верный ответ
    const [currentQuestions, setCurrentQuestions] = useState(0);
    const [arrayQuestions, setArrayQuestions] = useState([]);
    const [btnState, setBtnState] = useState(false);
    const [btn, setBtnColor] = useState(Array(4).fill({background: "white", color: "black"}));
    const [offGameButton, setOffGameButton] = useState(false);
    const [BtnMenuState, setBtnMenuState] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    function isLengthZero(){
        if(arrayQuestions.length === 0){
            return true;
        }
        else{
            return false;
        }
    }

    function isLastQuestions(){
        if(currentQuestions === 9){
            return true;
        }
        else{
            return false;
        }
    }
    
    useEffect(() =>{
        setArrayQuestions(arrayQuestionsQuotes());
    }, [])

    const checkAnsw = (number) => {
        setBtnState(true);
        setBtnMenuState(true);
        const afterClick = btn.map((o, index) => {
            if(index === number && (number + 1) === arrayQuestions[currentQuestions].validAnswers){
                setCorrectAnswers(correctAnswers + 1);
                return {...o, background: "rgb(0, 238, 4)", color: "white"};
            }
            else if(index === number && (number + 1) !== arrayQuestions[currentQuestions].validAnswers){
                return {...o, background: "rgb(255,36,0)", color: "white"};
            }
            else if(index === arrayQuestions[currentQuestions].validAnswers - 1){
                return {...o, background: "rgb(0, 238, 4)", color: "white"};
            }
            else{
                return{...o, background: "white", color: "black"};
            }
        })
        setBtnColor(afterClick);
        setOffGameButton(true)
    }

    const handleClickBtnMenu = (e) => {
        setBtnMenuState(false);
        console.log("пока");
    }

    const handleClick = (e) => {
        e.preventDefault();
        setCurrentQuestions(currentQuestions + 1)
        setBtnState(false);
        const afterClick = btn.map((o) => {
           return {...o, background: "white", color: "black"};
        })
        setBtnColor(afterClick);
        setOffGameButton(false)
    }

    console.log(arrayQuestions);
    return (
        <div className='game_menu'>
            <h1 style={{color: 'white',
                fontFamily: 'Cinzel',
            }}>
               {isLengthZero() 
                    ? <div>Привет</div>
                    : arrayQuestions[currentQuestions].Quote
                }
            </h1>
            <div className='game_button' style={offGameButton ? {pointerEvents: 'none'} : {}}>
                <button className='btn_answ' style={{background: btn[0].background, color: btn[0].color}} id='btn_answ1' onClick={() => checkAnsw(0)}>
                    {isLengthZero() 
                    ? <div></div>
                    : arrayQuestions[currentQuestions].Author[0]
                }
                </button>
                <button className='btn_answ' style={{background: btn[1].background, color: btn[1].color}} id='btn_answ2' onClick={() => checkAnsw(1)}>
                    {isLengthZero() 
                    ? <div></div>
                    : arrayQuestions[currentQuestions].Author[1]
                }
                </button>
                <button className='btn_answ' style={{background: btn[2].background, color: btn[2].color}} id='btn_answ3' onClick={() => checkAnsw(2)}>
                    {isLengthZero() 
                    ? <div></div>
                    : arrayQuestions[currentQuestions].Author[2]
                }
                </button>
                <button className='btn_answ' style={{background: btn[3].background, color: btn[3].color}} id='btn_answ4' onClick={() => checkAnsw(3)}>
                    {isLengthZero() 
                    ? <div></div>
                    : arrayQuestions[currentQuestions].Author[3]
                }
                </button>
            </div>
            {isLastQuestions()
                ? <ButtonMenu state_btnMenu = {BtnMenuState} handleClick={handleClickBtnMenu}/>
                : <ButtonNextQuest state_btn = {btnState} handleClick={handleClick}/>
            }
            <div className='count_questions'>
                <p>Вопрос {currentQuestions + 1}/10</p>
                <p>Правильных ответов: {correctAnswers}</p>
            </div>
        </div>
    )
}

export default Game;