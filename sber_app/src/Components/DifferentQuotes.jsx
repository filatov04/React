import React, { useState } from 'react';
import '../style/DifferentQuotes.css';
import data from '../data/quotes';
import Quote from './Quote';

const DifferentQuotes = ({genreQuotes}) => {
  const dataGenreQuotes = data[genreQuotes];

  return (
    <div className="different_quotes">
      <h1 className='name_quotes'>
        {genreQuotes}
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