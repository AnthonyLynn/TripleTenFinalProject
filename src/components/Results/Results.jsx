import NewsSection from "../NewsSection/NewsSection";

import "./Results.css";

function Results({ newsSources }) {
  return (
    <section className="results">
      <h2 className="results__header">Search results</h2>
      <NewsSection newsSources={newsSources} />
      <button className="results__more-btn">Show more</button>
    </section>
  );
}

export default Results;
