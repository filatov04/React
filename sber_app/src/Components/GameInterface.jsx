import React from 'react'

const GameInterface = () => {
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
            <button className='btn_answ' style={{background: btn[0].background, color: btn[0].color}} id='btn_answ1' onClick={checkAnsw(0, arrayQuestions[currentQuestions].validAnswers)}>
                {isLengthZero() 
                ? <div></div>
                : arrayQuestions[currentQuestions].Author[0]
            }
            </button>
            <button className='btn_answ' style={{background: btn[1].background, color: btn[1].color}} id='btn_answ2' onClick={checkAnsw(0, arrayQuestions[currentQuestions].validAnswers)}>
                {isLengthZero() 
                ? <div></div>
                : arrayQuestions[currentQuestions].Author[1]
            }
            </button>
            <button className='btn_answ' style={{background: btn[2].background, color: btn[2].color}} id='btn_answ3' onClick={checkAnsw(0, arrayQuestions[currentQuestions].validAnswers)}>
                {isLengthZero() 
                ? <div></div>
                : arrayQuestions[currentQuestions].Author[2]
            }
            </button>
            <button className='btn_answ' style={{background: btn[3].background, color: btn[3].color}} id='btn_answ4' onClick={checkAnsw(0, arrayQuestions[currentQuestions].validAnswers)}>
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

export default GameInterface;