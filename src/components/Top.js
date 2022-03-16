import './top.css'

function Top(props) {
  const { text } = props;

  return (
    <section className="header">
    <h1>{text}</h1>
    </section>
  )
}

export default Top;
