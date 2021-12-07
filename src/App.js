import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
    const [quotes, setQuotes] = useState('');

    const addQuoteToStor = () =>{
        let myQuote = document.querySelector('.quote').innerHTML;
        let myAuthor = document.querySelector('.author').innerHTML;

        sessionStorage.setItem('quote', JSON.stringify(myQuote));
        sessionStorage.setItem('author', JSON.stringify(myAuthor));
    }

    const takeQuoteFromStor = () =>{
        let myQuote = document.querySelector('.quote');
        let myAuthor = document.querySelector('.author');

        const getQuoteFromStor = JSON.parse(sessionStorage.getItem('quote'));
        const getAuthorFromStor = JSON.parse(sessionStorage.getItem('author'));

        myQuote.innerHTML = getQuoteFromStor;
        myAuthor.innerHTML = getAuthorFromStor;
    }

    const fetchQuote = () => {
        fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
            .then(res => res.json())
            .then(data => {
                let rndmNum = Math.floor(Math.random() * data.length);
                setQuotes(data[rndmNum]);
            });

    };


  return (
    <div className="App">
        <h1 className="title">Quotes</h1>
        <div className="quoteMain">
            <p className="quote">{quotes.quote}</p>
            <p className="author">{quotes.author}</p>
            <button className="btn" onClick={() => {fetchQuote(); addQuoteToStor()}}>New Quote</button>
            <button className="prevBtn" onClick={takeQuoteFromStor}>Previous Quote</button>
        </div>
    </div>
  );
}

export default App;
