import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import Results from "../Results/Results";
import Saved from "../Saved/Saved";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import Footer from "../Footer/Footer";

import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import ConfrimationModal from "../ConfrimationModal/ConfrimationModal";

import "./App.css";

function App() {
  return (
    <main className="page">
      <Nav />
      <Search />
      <Saved />
      <Results />
      <AboutAuthor />
      <Footer />

      <ConfrimationModal />
    </main>
  );
}

export default App;
