import "./Saved.css";

function Saved() {
  return (
    <section className="saved">
      <div className="saved__info">
        <p className="saved__nametag">Saved articles</p>
        <h2 className="saved__header">Elise, you have 5 saved articles</h2>
        <p className="saved__keywords">
          By keywords:
          <span className="saved__keys"> Nature, Yellowstone, and 2 other</span>
        </p>
      </div>
      <div className="saved__card-container"></div>
    </section>
  );
}

export default Saved;
