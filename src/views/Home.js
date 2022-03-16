import Top from '../components/Top'
import Card from '../components/Card'
import CardStack from '../components/CardStack'

import './Home.css'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const emptyCard = {
    cardNumber: '',
    name: '',
    validThru: '',
    ccv: '',
    vendor: ''
  }

  const navigate = useNavigate();
  const { cards, removeCard } = props;
  const [ selectedCard, setSelected ] = useState(emptyCard);

  function setSelectedCard(card, temp, deleting){
    if(deleting === true){
      setSelectedCard(cards[0])
    }else if(cards.length < 1){
      setSelected(emptyCard)
    }else{
      setSelected(card)
    }
  }

  function setSelectedCardAndIndex(card, index){
      card.index = index;
      setSelectedCard(card);
  }


  useEffect(() => {
      if(cards.length > 0){
        setSelectedCard(cards[0]);
      }
  }, []);




  return (
    <section>
    <Top text="E-WALLET" />
    <div className="aboveCard">
    <p>ACTIVE CARD</p>
    </div>
    <div className="card-component">
    <Card card={ selectedCard } setSelectedCard={ setSelectedCard } removeCard={ removeCard } notCardStack/>
    </div>
    <CardStack cards={ cards } setSelectedCard={ setSelectedCardAndIndex }/>
    <button className="navigation-button" onClick={ () => { navigate('/AddCard') }}>ADD A NEW CARD</button>
    </section>
  );
}

export default Home;
