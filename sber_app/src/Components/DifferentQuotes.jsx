import React, { useContext, useReducer, useState } from 'react';
import '../style/DifferentQuotes.css';
import data from '../data/quotes';
import Quote from './Quote';
import { GenreContext } from '../hook/context';

const DifferentQuotes = () => { 
  const {genre} = useContext(GenreContext);
  const dataGenreQuotes = data[genre];

  return (
    <div className="different_quotes">
      <h1 className='name_quotes'>
        {genre}
      </h1>
      <div className='all_quotes'>
        {dataGenreQuotes.map(option =>
          <Quote number={option.id + 1} quote={option.quotes} author={option.author}/>
        )}
      </div>
    </div>
  )
}

export default DifferentQuotes;