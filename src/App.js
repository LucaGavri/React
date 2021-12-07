import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
    const [quotes, setQuotes] = useState('');

    const fetchQuote = () => {
        fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
            .then(res => res.json())
            .then(data => {
                let rndmNum = Math.floor(Math.random() * data.length);
                setQuotes(data[rndmNum]);
            });

    };

    useEffect(() => {
        fetchQuote();
    },[]);

  return (
    <div className="App">
        <h1 className="title">Quotes</h1>
        <div className="quoteMain">
            <p className="quote">{quotes.quote}</p>
            <p className="author">{quotes.author}</p>
            <button className="btn" onClick={fetchQuote}>New Quote</button>
            <button className="prevBtn">Previous Quote</button>

        </div>
    </div>
  );
}

export default App;
