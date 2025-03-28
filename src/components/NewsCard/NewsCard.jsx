import cardImage from "../../images/TemplateCardImage.jpg";

import "./NewsCard.css";

function NewsCard() {
  return (
    <li className="news-card">
      <div className="news-card__topbar">
        <p className="news-card__keyword">Nature</p>
        <p className="news-card__popup">Sign in to save articles</p>
        <button className="news-card__btn news-card__btn_type_bookmark" />
        <button className="news-card__btn news-card__btn_type_trashcan" />
      </div>
      <img src={cardImage} alt="" className="news-card__image" />
      <div className="news-card__info">
        <p className="news-card__date">November 4, 2020</p>
        <h3 className="news-card__title">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h3>
        <p className="news-card__description">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find alb0oaowjnsj nciaunwvbdlkhaw.
        </p>
        <p className="news-card__group">treehugger</p>
      </div>
    </li>
  );
}

export default NewsCard;
