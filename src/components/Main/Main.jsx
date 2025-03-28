import Header from "../Header/Header";
import Results from "../Results/Results";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";

function Main() {
  return (
    <main className="main">
      <Header />
      <Preloader />
      <About />
    </main>
  );
}

export default Main;
