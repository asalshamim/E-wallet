import './Card.css'

import { useEffect, useRef } from 'react';
import bitcoin from '../assets/vendor-bitcoin.svg'
import evil from '../assets/vendor-evil.svg'
import ninja from '../assets/vendor-ninja.svg'
import blockchain from '../assets/vendor-blockchain.svg'
import dark from '../assets/chip-dark.svg'
import light from '../assets/chip-light.svg'

function Card(props) {
  const { card, setSelectedCard, index, notCardStack, removeCard} = props;
  const cardContainer = useRef(null);
  const vendorImg = useRef(null);
  const chipImg = useRef(null);

  function cardSectionFunction(){
    setSelectedCard(card, index);
  }

   function remove(){
    removeCard(card.index);
    setSelectedCard(card, index, true);
  }

  useEffect(() => {
    if(card.vendor === "bitcoin"){
      cardContainer.current.removeAttribute("class");
      cardContainer.current.classList.add("bitcoin");
      vendorImg.current.src = bitcoin;
      chipImg.current.src = dark;
    }else if(card.vendor === "ninja"){
      cardContainer.current.removeAttribute("class");
      cardContainer.current.classList.add("ninja");
      vendorImg.current.src = ninja;
      chipImg.current.src = light;
    }else if(card.vendor === "evil"){
      cardContainer.current.removeAttribute("class");
      cardContainer.current.classList.add("evil");
      vendorImg.current.src = evil;
      chipImg.current.src = light;
    }else if(card.vendor === "blockchain"){
      cardContainer.current.removeAttribute("class");
      cardContainer.current.classList.add("blockchain");
      vendorImg.current.src = blockchain;
      chipImg.current.src = light;
    }

  }, [card]);


  return (
    <section ref={cardContainer} className={card.vendor.length * 4 ? card.vendor : "allCards-section"} id="allCards-section" onClick={ notCardStack ? null : cardSectionFunction }>
    <button onClick={remove} style={ notCardStack ?  null : {display:"none"} }className="remove-btn">0</button>
    <div className="img-div">
    <img ref={chipImg} src={dark} alt="" className="chip" />
    <img ref={vendorImg} src={bitcoin} alt="" className="logo" />
    </div>

    <div className="number-div">
    <p>{ card.cardNumber.length >= 4 ? card.cardNumber : "XXXX XXXX XXXX XXXX"}</p>
    </div>

    <div className="bottom-div">

    <label>CARDHOLDER NAME
    <p>{ card.name.length > 0 ? card.name : "FIRSTNAME LASTNAME"}</p>
    </label>

    <label>VALID THRU
    <p className="valid-p">{ card.validThru.length > 0 ? card.validThru : "MM/YY"}</p>
    </label>
    </div>

    </section>
  );
}

export default Card;
