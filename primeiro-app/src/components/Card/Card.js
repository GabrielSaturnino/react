import './Card.css';

export function Card({ title, content }) {
  return (
    <div className='card-container'>
      <div className='card'>
        <h1>{title}</h1>
        <p>{content} </p>
      </div>
    </div>
  );
}