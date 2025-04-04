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
  isLoadingResults,
  hadSearched,
  onBookMark,
  newsSources,
  savedArticles,
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
        <Results
          savedArticles={savedArticles}
          onBookMark={onBookMark}
          newsSources={newsSources}
          isLoggedIn={isLoggedIn}
        />
      ) : (
        hadSearched && <NothingFound />
      )}
      <About />
    </main>
  );
}

export default Main;
