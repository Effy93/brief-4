import "./displayArticle.css";
import { useEffect } from "react";
import { useRandomArticle } from "../../hooks/useRandomArticle";

export default function DisplayArticle() {
  // destructuration
  const { article, loading, error, fetchRandomArticle } = useRandomArticle();

  useEffect(() => {
    const fetchArticle = async () => {
      await fetchRandomArticle();
    };
    fetchArticle();
  }, [fetchRandomArticle]);

  return (
    <div className="right-section">
      <button
        type="button"
        className="button-random"
        onClick={fetchRandomArticle}
        disabled={loading}
      >
        Generate random notion
      </button>
      {loading && <p> Loading ...</p>}
      {error && <p> {error} </p>}
      {article && (
        <>
          <div className="container-article">
            <h2> {article.notion} </h2>
          </div>
          <p> {article.content} </p>
        </>
      )}
    </div>
  );
}
