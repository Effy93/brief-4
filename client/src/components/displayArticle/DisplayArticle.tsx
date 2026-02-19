import "./displayArticle.css";
import type { Article, PropsArticle } from "../../interfaces/Article";
import { useFetch } from "../../services/UseFetch";

export default function DisplayArticle({
  selectedArticle,
  setSelectedArticle,
}: PropsArticle) {
  const { data, isPending, error, refetch } = useFetch<Article>(
    "http://localhost:3310/api/randomArticle",
  );
  const articleToDisplay = selectedArticle ?? data;

  return (
    <div className="right-section">
      <button
        type="button"
        className="button-random"
        onClick={() => {
          setSelectedArticle(null);
          refetch();
        }}
        disabled={isPending}
      >
        Generate random notion
      </button>
      {isPending && <p> Loading ...</p>}
      {error && <p> {error} </p>}
      {articleToDisplay && (
        <>
          <div className="container-article">
            <h2>{articleToDisplay.notion}</h2>
          </div>
          <p className="content">{articleToDisplay.content}</p>
        </>
      )}
    </div>
  );
}
