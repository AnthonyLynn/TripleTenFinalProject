import Header from "../Header/Header";
import Results from "../Results/Results";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import Navigation from "../Navigation/Navigation";

function Main({ isLoggedIn, openLoginModal, onLogOut, newsSources }) {
  return (
    <main className="main">
      <Navigation
        currentPage="main"
        isLoggedIn={isLoggedIn}
        openLoginModal={openLoginModal}
        onLogOut={onLogOut}
      />
      <Header />
      {newsSources.length > 0 && <Results newsSources={newsSources} />}
      <About />
    </main>
  );
}

export default Main;
