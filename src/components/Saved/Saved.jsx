import { useState, useEffect } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./Saved.css";

function Saved({ savedArticles }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    let newKeys = {};
    savedArticles.forEach(({ keyword }) => {
      if (!keyword) return;
      newKeys[keyword] = 1;
    });

    const keysArr = Object.keys(newKeys);
    setKeys(keysArr);
  }, [savedArticles]);

  return (
    <section className="saved">
      <p className="saved__nametag">Saved articles</p>
      <h2 className="saved__header">
        {currentUser.username}, you have {savedArticles.length} saved articles
      </h2>
      <p className="saved__keywords">
        By keywords:{" "}
        <span className="saved__keys">
          {keys.length > 2
            ? `${keys[1]}, ${keys[2]}, and ${keys.length - 2} other`
            : `${keys.join(", ")}`}
        </span>
      </p>
    </section>
  );
}

export default Saved;
