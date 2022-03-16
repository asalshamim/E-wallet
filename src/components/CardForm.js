import './CardForm.css'

function CardForm(props) {
  const { uppdateTempCard } = props;


  function cardChange(){
    const tempCard = {
      cardNumber: document.getElementById('cardNumberInput').value,
      name: document.getElementById('nameInput').value,
      validThru: document.getElementById('validThruInput').value,
      ccv: document.getElementById('ccvInput').value,
      vendor: document.getElementById('vendorSelect').value
    }
    uppdateTempCard(tempCard);
  }


  return (
    <section className="cardForm-section">
    <label>CARD NUMBER
    <input type="text" id="cardNumberInput" className="cardNumber-input big" onChange={ cardChange } placeholder="0000 0000 0000 0000"/>
    </label>
    <label>CARDHOLDER NAME
    <input type="text" id="nameInput" className="cardName-input big" onChange={ cardChange } placeholder="Firstname Lastname"/>
    </label>
    <div className="validAndCcv">
    <label>VALID THRU
    <input type="text" id="validThruInput" className="validThru-input small" onChange={ cardChange } placeholder="MM/YY"/>
    </label>
    <label>CCV
    <input type="text" id="ccvInput" className="ccv-input small" onChange={ cardChange } placeholder="XXX"/>
    </label>
    </div>
    <label>VENDOR
    <select name="title" id="vendorSelect" className="vendor-select big" defaultValue="" onChange={ cardChange }>
      <option value="" hidden>CHOOSE VENDOR</option>
      <option value="bitcoin">BITCOIN INC</option>
      <option value="ninja">NINJA BANK</option>
      <option value="blockchain">BLOCK CHAIN INC</option>
      <option value="evil">EVIL CORP</option>
    </select>
    </label>
    </section>
  )
}

export default CardForm;
