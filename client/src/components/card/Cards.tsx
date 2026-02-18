import "./card.css";
import type CardsType from "../../interfaces/CardsType";

export default function Cards({ notion, tag }: CardsType) {
  return (
    <div className="card-container">
      <h2> {notion} </h2>
      <div className="category-container">{tag}</div>
    </div>
  );
}
