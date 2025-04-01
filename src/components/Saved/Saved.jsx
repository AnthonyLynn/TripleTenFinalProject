import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./Saved.css";

function Saved() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="saved">
      <p className="saved__nametag">Saved articles</p>
      <h2 className="saved__header">
        {currentUser.username}, you have 5 saved articles
      </h2>
      <p className="saved__keywords">
        By keywords:{" "}
        <span className="saved__keys">Nature, Yellowstone, and 2 other</span>
      </p>
    </section>
  );
}

export default Saved;
