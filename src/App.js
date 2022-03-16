import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './views/Home'
import AddCard from './views/AddCard'

function App() {

  const [cards, uppdateCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});


  function addCard(card){
    uppdateCards((oldCards) =>{
      oldCards.push(card)
      return oldCards;
    });
  }
// remove cards
  function removeCard(index){
    let removeCards = cards;
    removeCards.splice(index, 1);
    uppdateCards(removeCards)
  }


  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Home headline="E-WALLET" cards={ cards } removeCard={ removeCard }/> } />
      <Route path="/AddCard" element={ <AddCard addCard={ addCard }/> } />
    </Routes>
    </div>
  );
}

export default App;
