import "./App.css";
import DisplayArticle from "./components/displayArticle/DisplayArticle";
import Home from "./pages/Home";

function App() {
  return (
    <div className="layout">
      <section className="left-section">
        <Home />
      </section>

      <section className="right-section">
        <DisplayArticle />
      </section>
    </div>
  );
}

export default App;
