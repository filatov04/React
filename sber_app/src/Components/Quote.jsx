import React, { useEffect, useState } from 'react';
import '../style/Menu.css';
import '../style/Quote.css';
import lupa from '../jpg/lupa.png';
import ModalWindow from './ModalWindow';
import closeButtonImage from '../jpg/closeButton2.png'
import { spatnavInstance, useSection } from '@salutejs/spatial';

const Quote = ({assistant_global, scaleStatus, setScale, number, quote, author}) => {

    //const [AllSection, customize] = useSection('AllSection');
    const [lupaFocus, customizeLupa] = useSection(`lupaSection${number}`);
    const [CloseScaleQuotes, customizeCLoseScaleQuote] = useSection(`ScaleQuote${number}`);
    
    const scaleQuote = () => {
        assistant_global(number, "ScaleQuote");
    }

    useEffect(() => {
        setModalActive(scaleStatus);
        if(scaleStatus){
            customizeCLoseScaleQuote({
                disabled:false,
            })
            spatnavInstance.focus(`ScaleQuote${number}`);
            assistant_global(quote, "SayQuote");
        }
        else{
            customizeCLoseScaleQuote({
                disabled:true,
            })
            spatnavInstance.focus(`lupaSection${number}`);
        }
    }, [scaleStatus])

    const [modalActive, setModalActive] = useState(false);
  return (
    <div className='div_quotes'>
        <blockquote className='quote'>
            <p className='quotes'>{number}. {quote}</p>
            <cite className='author'>{author}</cite>
        </blockquote>
        <div {...lupaFocus}><button id={number} className='sn-section-item lupa' tabIndex={-1} onClick={() => scaleQuote()}>
            <img className='lupa_image' src={lupa}/>
        </button></div>
        <ModalWindow assistant_global={assistant_global} active={modalActive} setActive={setModalActive} setModalState={{setScale, scaleStatus}} >
            <div {...CloseScaleQuotes} style={{display: 'flex', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
                <blockquote className='quoteInScale'>
                    <p className='quotesInScale'>{number}. {quote}</p>
                    <cite className='authorInScale'>{author}</cite>
                </blockquote>
                <button id={number} className="sn-section-item closeButton" tabIndex={-1} onClick={() => assistant_global(null, "closeQuoteModal")}>
                    <img className="closeButtonImage" src={closeButtonImage}/>
                </button>
            </div> 
        </ModalWindow>
    </div>
  )
}

export default Quote;