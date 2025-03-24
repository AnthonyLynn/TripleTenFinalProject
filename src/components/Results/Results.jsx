import "./Results.css";

function Results() {
  return (
    <section className="results">
      <h2 className="results__header">Search results</h2>
      <ul className="results__card-container"></ul>
      <button className="results__more-btn">Show more</button>
    </section>
  );
}

export default Results;
