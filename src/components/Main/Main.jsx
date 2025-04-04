import Header from "../Header/Header";
import Results from "../Results/Results";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import About from "../About/About";
import Navigation from "../Navigation/Navigation";

function Main({
  isLoggedIn,
  openLoginModal,
  onLogOut,
  keyword,
  isLoadingResults,
  hadSearched,
  newsSources,
  onSearch,
}) {
  return (
    <main className="main">
      <Navigation
        currentPage="main"
        isLoggedIn={isLoggedIn}
        openLoginModal={openLoginModal}
        onLogOut={onLogOut}
      />
      <Header onSearch={onSearch} />
      {isLoadingResults ? (
        <Preloader />
      ) : newsSources.length > 0 ? (
        <Results keyword={keyword} newsSources={newsSources} />
      ) : (
        hadSearched && <NothingFound />
      )}
      <About />
    </main>
  );
}

export default Main;
