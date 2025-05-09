import { useState, useEffect } from "react";
import { uuidv4 } from "../../utils/idGenerator";
import NewsCard from "../NewsCard/NewsCard";

import "./Results.css";

function Results({ newsSources, onBookMark, isLoggedIn, savedArticles }) {
  const [newsShown, setNewsShown] = useState(3);
  const [canShowMore, setCanShowMore] = useState(true);

  function updateShowMoreButton() {
    setCanShowMore(newsShown < newsSources.length);
  }

  useEffect(() => {
    setNewsShown(3);
    updateShowMoreButton();
  }, [newsSources]);

  function onShowMore() {
    setNewsShown(newsShown + 3);
    updateShowMoreButton();
  }

  return (
    <section className="results">
      <h2 className="results__header">Search results</h2>
      <ul className="results__card-container">
        {newsSources.slice(0, newsShown).map((source) => {
          return (
            <NewsCard
              savedArticles={savedArticles}
              key={uuidv4()}
              onBookMark={onBookMark}
              source={source}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </ul>
      {canShowMore && (
        <button className="results__more-btn" onClick={onShowMore}>
          Show more
        </button>
      )}
    </section>
  );
}

export default Results;
