import { uuidv4 } from "../../utils/idGenerator";

import Saved from "../Saved/Saved";
import Navigation from "../Navigation/Navigation";
import NewsCard from "../NewsCard/NewsCard";

import "./SavedNews.css";

function SavedNews({
  isLoggedIn,
  openLoginModal,
  onLogOut,
  onTrash,
  savedArticles,
}) {
  return (
    <main className="saved-news">
      <Navigation
        currentPage="saved"
        isLoggedIn={isLoggedIn}
        openLoginModal={openLoginModal}
        onLogOut={onLogOut}
      />
      <Saved savedArticles={savedArticles} />
      <ul className="saved-news__card-container">
        {savedArticles.map((source) => {
          return (
            <NewsCard
              savedArticles={savedArticles}
              key={uuidv4()}
              onTrash={onTrash}
              source={source}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default SavedNews;
