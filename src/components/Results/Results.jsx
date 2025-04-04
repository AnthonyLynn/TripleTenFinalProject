import { uuidv4 } from "../../utils/idGenerator";
import NewsCard from "../NewsCard/NewsCard";

import "./Results.css";

function Results({ newsSources, keyword }) {
  return (
    <section className="results">
      <h2 className="results__header">Search results</h2>
      <ul className="results__card-container">
        {newsSources
          .filter((source) => {
            return source.urlToImage;
          })
          .map((source) => {
            return (
              <NewsCard key={uuidv4()} keyword={keyword} source={source} />
            );
          })}
      </ul>
      <button className="results__more-btn">Show more</button>
    </section>
  );
}

export default Results;
