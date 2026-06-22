// src/components/SideCard.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './SideCard.module.css';

function SideCard({ likedList }) {
  const { t } = useLanguage();

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{t('favorites')}</h3>
      {likedList.length === 0 ? (
        <p className={styles.emptyText}>{t('noFavorites')}</p>
      ) : (
        <ul className={styles.list}>
          {likedList.map(book => {
            const imageSrc = new URL(`../assets/${book.image}`, import.meta.url).href;
            return (
              <li key={book.id} className={styles.item}>
                <img src={imageSrc} alt={book.title} className={styles.thumb} />
                <span className={styles.bookTitle}>{book.title}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SideCard;