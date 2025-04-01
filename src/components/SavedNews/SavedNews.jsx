import Saved from "../Saved/Saved";
import NewsSection from "../NewsSection/NewsSection";

function SavedNews({ newsSources }) {
  return (
    <main className="saved-news">
      <Saved />
      <NewsSection newsSources={newsSources} />
    </main>
  );
}

export default SavedNews;
