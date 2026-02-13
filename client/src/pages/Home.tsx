import Cards from "../components/card/Cards";
import DisplayArticle from "../components/displayArticle/DisplayArticle";
import "./home.css";
import { BiSearchAlt } from "react-icons/bi";
export default function Home() {
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
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
        <div className="right-container">
          <DisplayArticle />
        </div>
      </div>
    </section>
  );
}
