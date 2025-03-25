import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import Results from "../Results/Results";
import Saved from "../Saved/Saved";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import Footer from "../Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="page">
      <Nav />
      <Search />
      <Saved />
      <Results />
      <AboutAuthor />
      <Footer />
    </div>
  );
}

export default App;
