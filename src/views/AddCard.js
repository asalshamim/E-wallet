import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCard(props) {
  const emptyCard = {
    cardNumber: '',
    name: '',
    validThru: '',
    ccv: '',
    vendor: ''
  }

  const navigate = useNavigate();
  const { addCard } = props;
  const [ tempCard, uppdateTempCard ] = useState(emptyCard);

  function addCardButton(){
    addCard(tempCard);
    //setTimeout(() => {
      navigate('/');
  //  }, 1000);
  }

  return (
    <section>
    <Top text="ADD A NEW BANK CARD"/>
    <div className="aboveCard">
    <p>NEW CARD</p>
    </div>
    <div className="card-component">
    <Card card={ tempCard } />
    </div>
    <CardForm uppdateTempCard={ uppdateTempCard } />
    <button className="navigation-button" onClick={ addCardButton }>ADD CARD</button>
    </section>
  );
}

export default AddCard;
