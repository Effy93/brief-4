import "./card.css";
import type CardsType from "../../interfaces/CardsType";

export default function Cards({ notion, tag, onClick }: CardsType) {
  return (
    <div className="card-container" onClick={onClick} onKeyUp={onClick}>
      <h2> {notion} </h2>
      <div className="category-container">{tag}</div>
    </div>
  );
}
