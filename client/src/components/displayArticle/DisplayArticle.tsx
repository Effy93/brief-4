import "./displayArticle.css";
import type { Article } from "../../interfaces/Article";
import { useFetch } from "../../services/UseFetch";

export default function DisplayArticle() {
  const { data, isPending, error, refetch } = useFetch<Article>("http://localhost:3310/api/randomArticle");

  return (
    <div className="right-section">
      <button type="button" className="button-random" onClick={refetch} disabled={isPending}>
        Generate random notion
      </button>
      {isPending && <p> Loading ...</p>}
      {error && <p> {error} </p>}
      {data && (
        <>
          <div className="container-article">
            <h2> {data.notion} </h2>
          </div>
          <p className="content"> {data.content} </p>
        </>
      )}
    </div>
  );
}
