import { useCallback, useState } from "react";
import type { Article } from "../interfaces/Article";
import UseFetch from "../services/UseFetch";

export function useRandomArticle() {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomArticle = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await UseFetch("http://localhost:3310/api/randomArticle");
      // router.get("/api/randomArticle", articleController.readOne);
      setArticle(data);
    } catch (error) {
      setError("Impossible de charger l'article");
    } finally {
      setLoading(false);
    }
  }, []);
  return { article, loading, error, fetchRandomArticle };
}
