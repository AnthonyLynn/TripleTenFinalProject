import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import Footer from "../Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="page">
      <Nav />
      <Search />
      <AboutAuthor />
      <Footer />
    </div>
  );
}

export default App;
