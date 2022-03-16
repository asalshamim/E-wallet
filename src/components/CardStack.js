import Card from './Card'
import './CardStack.css'

function CardStack(props) {
const { cards, setSelectedCard } = props;

const cardComponent = cards.map((card, index) =>{
  return <Card card={ card } setSelectedCard={ setSelectedCard } index={ index } key={ index } />
});

  return (
    <section className="cardStack-component">
    <section className="cardStack-section">
    { cardComponent }
    </section>
    </section>
  );
}

export default CardStack;
