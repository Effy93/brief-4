import Cards from "../components/card/Cards";
import DisplayArticle from "../components/displayArticle/DisplayArticle";
import "./home.css";
import { BiSearchAlt } from "react-icons/bi";
import CategoryTag from "../components/categoryTag/CategoryTag";
import type { Article } from "../interfaces/Article";
import { useFetch } from "../services/UseFetch";

export default function Home() {
  // useFetch typé comme tableau d'articles
  const { data, isPending, error } = useFetch<Article[]>(
    "http://localhost:3310/api/articles",
  );

  return (
    <section className="section-home">
      <h1>Popularize</h1>
      <div className="main-container">
        <div className="left-container">
          <div className="input-container">
            <input type="text" placeholder="react,backend,SGBD" />
            <BiSearchAlt size={35} />
          </div>

          <div className="cards-container">
            {isPending && <p>Loading ...</p>}
            {error && <p>{error}</p>}

            {data?.length ? (
              data.map((article: Article) => (
                <Cards
                  key={article.id}
                  notion={article.notion}
                  tag={article.categories.map((title) => (
                    <CategoryTag key={title.id} title={title.label} />
                  ))}
                />
              ))
            ) : (
              <p>Aucun article disponible.</p>
            )}
          </div>
        </div>

        <div className="right-container">
          <DisplayArticle />
        </div>
      </div>
    </section>
  );
}
