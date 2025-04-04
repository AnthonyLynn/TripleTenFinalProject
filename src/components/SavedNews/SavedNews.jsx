import Saved from "../Saved/Saved";
import Navigation from "../Navigation/Navigation";

function SavedNews({ isLoggedIn, openLoginModal, onLogOut }) {
  return (
    <main className="saved-news">
      <Navigation
        currentPage="saved"
        isLoggedIn={isLoggedIn}
        openLoginModal={openLoginModal}
        onLogOut={onLogOut}
      />
      <Saved />
    </main>
  );
}

export default SavedNews;
