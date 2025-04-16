import notFoundImage from "../../images/Not_Found_Icon.svg";

import "./NothingFound.css";

function NothingFound() {
  return (
    <section className="nothing-found">
      <img
        src={notFoundImage}
        alt="Not Found"
        className="nothing-found__image"
      />
      <h2 className="nothing-found__header">Nothing found</h2>
      <p className="nothing-found__description">
        {"Sorry, but nothing matched your search terms."}
      </p>
    </section>
  );
}

export default NothingFound;
