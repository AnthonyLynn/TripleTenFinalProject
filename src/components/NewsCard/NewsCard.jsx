import { useState } from "react";
import { isoToMonthDayYear } from "../../utils/dateUtil";

import "./NewsCard.css";

function NewsCard({ source, onBookMark, onTrash, isLoggedIn, savedArticles }) {
  const [tooltipActive, setTooltipActive] = useState(false);

  const isSaved = savedArticles.find((element) => {
    return element.title === source.title;
  });

  function onBookMarkClick() {
    if (isSaved || !isLoggedIn) return;
    onBookMark(source);
  }

  function onTrashClick() {
    onTrash(source);
  }

  function onIconHover() {
    if (isLoggedIn && onBookMark) return;
    setTooltipActive(true);
  }

  function onIconLeave() {
    setTooltipActive(false);
  }

  return (
    <li className="news-card">
      <div className="news-card__topbar">
        {source.keyword && (
          <p className="news-card__keyword">{source.keyword}</p>
        )}
        <div className="news-card__btn-container">
          <p
            className={`news-card__tooltip ${
              tooltipActive && "news-card__tooltip_active"
            }`}
          >
            {onBookMark ? "Sign in to save articles" : "Remove from saved"}
          </p>
          {onBookMark && (
            <button
              className={`news-card__btn 
                ${
                  isSaved && isLoggedIn
                    ? "news-card__btn_type_bookmark-highlighted"
                    : "news-card__btn_type_bookmark"
                }
              `}
              onClick={onBookMarkClick}
              onMouseEnter={onIconHover}
              onMouseLeave={onIconLeave}
            />
          )}
          {onTrash && (
            <button
              className="news-card__btn news-card__btn_type_trashcan"
              onClick={onTrashClick}
              onMouseEnter={onIconHover}
              onMouseLeave={onIconLeave}
            />
          )}
        </div>
      </div>
      <a href={source.url} target="_blank" className="news-card__link">
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
