import React, { useContext } from "react";
import data from '../data/quotes';


export const ArrayQuestionsQuotes = (genreType) => { 
    const genre = genreType;
    const arrayWithNumberQuotes = randomlyInitializeArray(0,29).slice(0,10);
    var targetArray = new Array(10)
    for(var i = 0; i<10; i++){
        var quotesNumber = randomlyInitializeArray(0,29).slice(0,4)
        console.log(quotesNumber);
        if(!quotesNumber.includes(arrayWithNumberQuotes[i])){
            var positionValidAuthor = Math.floor(Math.random() * 4);
            quotesNumber[positionValidAuthor] = arrayWithNumberQuotes[i]
            const question = {
                Quote: data[genre][arrayWithNumberQuotes[i]].quotes, 
                Author: [ 
                         data[genre][quotesNumber[0]] && data[genre][quotesNumber[0]].author,
                         data[genre][quotesNumber[1]] && data[genre][quotesNumber[1]].author,
                         data[genre][quotesNumber[2]] && data[genre][quotesNumber[2]].author,
                         data[genre][quotesNumber[3]] && data[genre][quotesNumber[3]].author
                ],
                validAnswers: positionValidAuthor + 1,
            }
            targetArray[i] = question
        }
        else{
            const positionValidAuthor = quotesNumber.indexOf(arrayWithNumberQuotes[i]);
            const question = {
                Quote: data[genre][arrayWithNumberQuotes[i]].quotes, 
                Author: [
                         data[genre][quotesNumber[0]] && data[genre][quotesNumber[0]].author,
                         data[genre][quotesNumber[1]] && data[genre][quotesNumber[1]].author,
                         data[genre][quotesNumber[2]] && data[genre][quotesNumber[2]].author,
                         data[genre][quotesNumber[3]] && data[genre][quotesNumber[3]].author
                ],
                validAnswers: positionValidAuthor + 1,
            }
            targetArray[i] = question;
        }
    }
    return targetArray;
}


export const shuffle = (o) => { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
    
export const randomlyInitializeArray = (min, max) =>  {
    var start = min;
    var length = max;
    var myArray = [];
    for (var i = 0; start <= length; myArray[i++] = start++);
    return myArray = shuffle(myArray);
}