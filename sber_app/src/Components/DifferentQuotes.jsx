import React, { useContext, useEffect, useState } from 'react';
import '../style/DifferentQuotes.css';
import data from '../data/quotes';
import Quote from './Quote';
import { GenreContext } from '../hook/context';
import { useNavigate } from 'react-router-dom';

const DifferentQuotes = ({returnMenuState, setReturnMenuState}) => { 
  const {genre} = useContext(GenreContext);
  const dataGenreQuotes = data[genre];
  const router = useNavigate();
  //const [state, setState] = useState(false);

  useEffect(() => {
    if(returnMenuState){
      router('/');
      setReturnMenuState(false);
    }
  }, [returnMenuState]);

  return (
    <div>
      <button onClick={() => router('/')} className='menu'>Главное меню</button>
      <div className="different_quotes">
        <h1 className='name_quotes'>
          {genre}
        </h1>
        <div className='all_quotes'>
          {dataGenreQuotes.map(option =>
            <Quote key={option.id + 1} number={option.id + 1} quote={option.quotes} author={option.author}/>
          )}
        </div>
      </div>
    </div>    
  )
}

export default DifferentQuotes;