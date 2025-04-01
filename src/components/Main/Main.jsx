import Header from "../Header/Header";
import Results from "../Results/Results";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";

function Main({ newsSources }) {
  return (
    <main className="main">
      <Header />
      {newsSources.length > 0 && <Results newsSources={newsSources} />}
      <About />
    </main>
  );
}

export default Main;
