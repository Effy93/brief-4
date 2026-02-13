import "./card.css";
import CategoryTag from "../categoryTag/CategoryTag";
export default function Cards() {
  return (
    <div className="card-container">
      <h2>React router</h2>
      <div className="category-container">
        <CategoryTag title="Javascript" />
        <CategoryTag title="CSS" />
        <CategoryTag title="React router" />
        <CategoryTag title="Tailwind" />
      </div>
    </div>
  );
}
