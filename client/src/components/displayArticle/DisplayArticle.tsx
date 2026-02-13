import "./displayArticle.css";

interface DisplayArticle {
  notion: string;
  content: string;
}

export default function DisplayArticle() {
  return (
    <div className="right-section">
      <button type="button" className="button-random">
        Generate random notion
      </button>
      <div className="container-article">
        <h2> Provider - React </h2>
      </div>
      <p>
        Le provider c'est le robinet, le consummer (useContext) c'est le verre
        d'eau
      </p>
    </div>
  );
}
