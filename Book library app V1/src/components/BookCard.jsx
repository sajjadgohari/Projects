// src/components/BookCard.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './BookCard.module.css';

function BookCard({ book, handleLike, isInitiallyLiked }) {
  const { title, author, image, language, pages, link } = book;
  const [liked, setLiked] = useState(isInitiallyLiked);
  const { t } = useLanguage();

  useEffect(() => {
    setLiked(isInitiallyLiked);
  }, [isInitiallyLiked]);

  const likeHandler = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    handleLike(book, newLikedState);
  };

  const imageSrc = new URL(`../assets/${image}`, import.meta.url).href;

  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
        <div className={styles.infoRow}>
          <span>{language}</span>
          <span>{pages} {t('pages')}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={likeHandler} className={styles.likeBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={liked ? "#ff4757" : "none"} stroke={liked ? "#ff4757" : "#666"} strokeWidth="2">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <a href={link} target="_blank" rel="noreferrer" className={styles.linkBtn}>
          {t('moreInfo')}
        </a>
      </div>
    </div>
  );
}

export default BookCard;