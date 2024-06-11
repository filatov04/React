import React, { useContext, useEffect, useState } from 'react';
import '../style/DifferentQuotes.css';
import data from '../data/quotes';
import Quote from './Quote';
import { GenreContext } from '../hook/context';
import { useNavigate } from 'react-router-dom';
import { getCurrentFocusedElement, spatnavInstance, useSection } from '@salutejs/spatial';


const DifferentQuotes = ({assistant_global, scale, setScale, returnMenuState, setReturnMenuState}) => { 
  const {genre} = useContext(GenreContext);
  const dataGenreQuotes = data[genre];
  const router = useNavigate();

  const [menuFocus, customizeMenu] = useSection('PageQuotes');
  const [returnMenu, customizeReturnMenu] = useSection("returnMenu");
  const [allQuote, customizeAllQuote] = useSection('AllQuote');

  useEffect(() => {
    spatnavInstance.focus('returnMenu');
  },[])

  useEffect(() =>{
    const result = scale.filter((temp) => temp.status !== false)
    if(result.length !== 0){
      customizeAllQuote({
        disabled: true,
      });
      customizeReturnMenu({
        disabled: true,
      });
    }
    else{
      customizeAllQuote({
        disabled: false,
      });
      customizeReturnMenu({
        disabled: false,
      });
    }
  }, [scale])

  useEffect(()=>{
    const handleKeyDown = ((event) => {
      const focusedReturnMenu = getCurrentFocusedElement()
      switch (event.code) {
        case 'ArrowDown':
          if(focusedReturnMenu.id !== '1'){
            event.preventDefault();
            console.log('hello down')
            window.scrollBy({
              top: 500,
              behavior: 'smooth'
            });         
            break;
          }
        case 'ArrowUp':
          event.preventDefault();
          console.log('hello up');
          window.scrollBy({
            top: -500,
            behavior: 'smooth'
          });
          break;
      }
    });
    window.addEventListener('keydown', handleKeyDown);

    // Удаляем обработчик при размонтировании компонента
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [])

  useEffect(() => {   
    const intervalId = setInterval(() => { 
      const focusedElement = getCurrentFocusedElement();
      console.log("Focused element:", focusedElement);
    }, 5000); // 5000 миллисекунд = 5 секунд

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if(returnMenuState){
      router('/');
      setReturnMenuState(false);
    }
  }, [returnMenuState]);

  return (
    <div {...menuFocus} className='sn-section-root page_quotes'>
      <div {...returnMenu}>
        <button id='0' onClick={() => assistant_global(null, "returnMenu")} className='sn-section-item menu' tabIndex={-1}>Главное меню</button>
      </div>
      <div className="different_quotes">
        <h1 className='name_quotes'>
          {genre}
        </h1>
        <div {...allQuote} className='all_quotes'>
          {dataGenreQuotes.map((option, index) =>
            <Quote assistant_global={assistant_global} scaleStatus={scale[index].status} setScale={setScale} key={option.id + 1} number={option.id + 1} quote={option.quotes} author={option.author}/>
          )}
        </div>
      </div>
    </div>    
  )
}

export default DifferentQuotes;