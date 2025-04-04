import { isoToMonthDayYear } from "../../utils/dateUtil";

import "./NewsCard.css";

function NewsCard({
  source,
  keyword,
  onBookMarkClick,
  onTrashClick,
  isLoggedIn,
}) {
  return (
    <li className="news-card">
      <div className="news-card__topbar">
        <p className="news-card__keyword">{keyword}</p>
        <div className="news-card__btn-container">
          <p className="news-card__tooltip">Sign in to save articles</p>
          {onBookMarkClick && (
            <button
              className={`news-card__btn 
                ${
                  isSaved
                    ? "news-card__btn_type_bookmark-highlighted"
                    : "news-card__btn_type_bookmark"
                }
              `}
              onClick={isLoggedIn && onBookMarkClick}
            />
          )}
          {onTrashClick && (
            <button className="news-card__btn news-card__btn_type_trashcan" />
          )}
        </div>
      </div>
      <a
        href="https://newsapi.org/docs/endpoints/top-headlines"
        target="_blank"
        className="news-card__link"
      >
        <img
          src={source.urlToImage}
          alt="News Image"
          className="news-card__image"
        />
        <div className="news-card__info">
          <p className="news-card__date">
            {isoToMonthDayYear(source.publishedAt)}
          </p>
          <h3 className="news-card__title">{source.title}</h3>
          <p className="news-card__description">{source.description}</p>
          <p className="news-card__group">{source.source.name}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
