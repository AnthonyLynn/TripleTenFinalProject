import Saved from "../Saved/Saved";
import NewsSection from "../NewsSection/NewsSection";
import Navigation from "../Navigation/Navigation";

function SavedNews({ isLoggedIn, openLoginModal, onLogOut, newsSources }) {
  return (
    <main className="saved-news">
      <Navigation
        currentPage="saved"
        isLoggedIn={isLoggedIn}
        openLoginModal={openLoginModal}
        onLogOut={onLogOut}
      />
      <Saved />
      <NewsSection newsSources={newsSources} />
    </main>
  );
}

export default SavedNews;
