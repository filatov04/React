import React, { useEffect, useState } from 'react';
import '../style/Menu.css';
import '../style/Quote.css';
import lupa from '../jpg/lupa.png';
import ModalWindow from './ModalWindow';
import closeButtonImage from '../jpg/closeButton2.png'
import { getCurrentFocusedElement, useSection } from '@salutejs/spatial';

const Quote = ({assistant_global, scaleStatus, setScale, number, quote, author}) => {

    const [lupaFocus, customizeLupa] = useSection('lupaSection');
    

    const scaleQuote = () => {
        assistant_global(number, "ScaleQuote");
    }

    useEffect(() => {
        setModalActive(scaleStatus);
        if(scaleStatus){
            assistant_global(quote, "SayQuote");
        }
    }, [scaleStatus])

    const [modalActive, setModalActive] = useState(false);
  return (
    <div {...lupaFocus} className='sn-section-root div_quotes'>
        <blockquote className='quote'>
            <p className='quotes'>{number}. {quote}</p>
            <cite className='author'>{author}</cite>
        </blockquote>
        <button id={number} className='sn-section-item lupa' tabIndex={-1} onClick={() => scaleQuote()}>
            <img className='lupa_image' src={lupa}/>
        </button>
        <ModalWindow assistant_global={assistant_global} active={modalActive} setActive={setModalActive} setModalState={{setScale, scaleStatus}} >
            <blockquote className='quoteInScale'>
                <p className='quotesInScale'>{number}. {quote}</p>
                <cite className='authorInScale'>{author}</cite>
            </blockquote>
            <button className="closeButton" onClick={() => assistant_global(null, "closeQuoteModal")}>
              <img className="closeButtonImage" src={closeButtonImage}/>
            </button> 
        </ModalWindow>
    </div>
  )
}

export default Quote;