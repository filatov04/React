import React, { useEffect, useState } from 'react';
import data from '../data/quotes';
import '../function/createArray';
import { arrayQuestionsQuotes } from '../function/createArray';
import '../style/Game.css';

const Game = () => {
    const [currentQuestions, setCurrentQuestions] = useState(0);
    const [arrayQuestions, setArrayQuestions] = useState([]);
    const [btnState, setBtnState] = useState(false);
    const [btn1, setBtn1] = useState();
    const [btn2, setBtn2] = useState();
    const [btn3, setBtn3] = useState();
    const [btn4, setBtn4] = useState();

    function isLengthZero(){
        if(arrayQuestions.length === 0){
            return true;
        }
        else{
            return false;
        }
    }

    function check_answ(number){
        if(number + 1 === arrayQuestions[currentQuestions].validAnswers){
            return true;
        }
        else{
            return false;
        }
    }

    //const arrayQuestions = arrayQuestionsQuotes();
    useEffect(() =>{
        setArrayQuestions(arrayQuestionsQuotes());
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        setCurrentQuestions(currentQuestions + 1)
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
            <div className='game_button'>
                <button className='btn_answ' id='btn_answ1'>
                    {isLengthZero() 
                    ? <div></div>
                    : arrayQuestions[currentQuestions].Author[0]
                }
                </button>
                <button className='btn_answ' id='btn_answ2'>
                    {isLengthZero() 
                    ? <div></div>
                    : arrayQuestions[currentQuestions].Author[1]
                }
                </button>
                <button className='btn_answ' id='btn_answ3'>
                    {isLengthZero() 
                    ? <div></div>
                    : arrayQuestions[currentQuestions].Author[2]
                }
                </button>
                <button className='btn_answ' id='btn_answ4'>
                    {isLengthZero() 
                    ? <div></div>
                    : arrayQuestions[currentQuestions].Author[3]
                }
                </button>
            </div>
            <div className='btn_nextQuest'>
                {btnState
                    ? <button className='check_answ'>Следующий вопрос</button>
                    : <button className='check_unAnsw' disabled>Следующий вопрос</button>
                }
            </div>
            <div className='count_questions'>
                Вопрос {currentQuestions + 1}/10
            </div>
        </div>
    )
}

export default Game;