import Cards from "../components/card/Cards";
import DisplayArticle from "../components/displayArticle/DisplayArticle";
import "./home.css";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import CategoryTag from "../components/categoryTag/CategoryTag";
import type { Article } from "../interfaces/Article";
import { useFetch } from "../services/UseFetch";

export default function Home() {
  // useFetch typé comme tableau d'articles
  const { data, isPending, error } = useFetch<Article[]>(
    "http://localhost:3310/api/articles",
  );
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [query, setQuery] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredData = data?.filter(
    (element) =>
      element.notion.toLowerCase().includes(query.toLowerCase()) ||
      // some permet de filtrer si query === cat1 ou si query === cat2, etc
      element.categories.some((category) =>
        category.label.toLowerCase().includes(query.toLowerCase()),
      ),
  );

  return (
    <section className="section-home">
    
      <div className="main-container">
        <div className="left-container">
          <div className="input-container">
            <input
              type="text"
              placeholder="react,backend,SGBD"
              onChange={handleChange}
            />
            <BiSearchAlt size={35} />
          </div>

          <div className="cards-container">
            {isPending && <p>Loading ...</p>}
            {error && <p>{error}</p>}

            {filteredData?.length ? (
              filteredData?.map((article: Article) => (
                <Cards
                  key={article.id}
                  notion={article.notion}
                  tag={article.categories.map((title) => (
                    <CategoryTag key={title.id} title={title.label} />
                  ))}
                  onClick={() => setSelectedArticle(article)}
                />
              ))
            ) : (
              <p>Aucun article disponible.</p>
            )}
          </div>
        </div>

        <div className="right-container">
          <DisplayArticle
            selectedArticle={selectedArticle}
            setSelectedArticle={setSelectedArticle}
          />
        </div>
      </div>
    </section>
  );
}
