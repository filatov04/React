import React, { useContext, useEffect, useState } from 'react';
import '../style/DifferentQuotes.css';
import data from '../data/quotes';
import Quote from './Quote';
import { GenreContext } from '../hook/context';
import { useNavigate } from 'react-router-dom';

const DifferentQuotes = ({assistant_global, scale, setScale, returnMenuState, setReturnMenuState}) => { 
  const {genre} = useContext(GenreContext);
  const dataGenreQuotes = data[genre];
  const router = useNavigate();

  useEffect(() => {
    if(returnMenuState){
      router('/');
      setReturnMenuState(false);
    }
  }, [returnMenuState]);

  return (
    <div className='page_quotes'>
      <button onClick={() => assistant_global(null, "returnMenu")} className='menu'>Главное меню</button>
      <div className="different_quotes">
        <h1 className='name_quotes'>
          {genre}
        </h1>
        <div className='all_quotes'>
          {dataGenreQuotes.map((option, index) =>
            <Quote assistant_global={assistant_global} scaleStatus={scale[index].status} setScale={setScale} key={option.id + 1} number={option.id + 1} quote={option.quotes} author={option.author}/>
          )}
        </div>
      </div>
    </div>    
  )
}

export default DifferentQuotes;