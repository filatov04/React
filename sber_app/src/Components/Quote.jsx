import React, { useState } from 'react';
import '../style/Menu.css';
import '../style/Quote.css';
import lupa from '../jpg/lupa.png';
import ModalWindow from './ModalWindow';

const Quote = ({number, quote, author}) => {
    const [modalActive, setModalActive] = useState(false);
  return (
    <div className='div_quotes'>
        <blockquote className='quote'>
            <p className='quotes'>{number}. {quote}</p>
            <cite className='author'>{author}</cite>
        </blockquote>
        <button className='lupa' onClick={() => setModalActive(true)}>
            <img className='lupa_image' src={lupa}/>
        </button>
        <ModalWindow active={modalActive} setActive={setModalActive}>
            <blockquote className='quoteInScale'>
                <p className='quotesInScale'>{number}. {quote}</p>
                <cite className='authorInScale'>{author}</cite>
            </blockquote>
        </ModalWindow>
    </div>
  )
}

export default Quote;