// src/components/Books.jsx
import React, { useState } from 'react';
import { books as data } from '../constants/mockData';
import { useLanguage } from '../context/LanguageContext';
import BookCard from './BookCard';
import SideCard from './SideCard';
import Search from './Search';
import styles from './Books.module.css';

function Books() {
  const [books, setBooks] = useState(data);
  const [likedList, setLikedList] = useState([]);
  const [search, setSearch] = useState("");
  const { t } = useLanguage();

  const handleSearch = () => {
    if (search.trim()) {
      const filteredBooks = data.filter(book => 
        book.title.toLowerCase().includes(search.toLowerCase().trim())
      );
      setBooks(filteredBooks);
    } else {
      setBooks(data);
    }
  };

  const handleLike = (book, isLiked) => {
    if (isLiked) {
      setLikedList(prev => [...prev, book]);
    } else {
      setLikedList(prev => prev.filter(b => b.id !== book.id));
    }
  };

  return (
    <div className={styles.container}>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <div className={styles.mainContent}>
        <div className={styles.booksGrid}>
          {books.length > 0 ? (
            books.map(book => (
              <BookCard 
                key={book.id} 
                book={book} 
                handleLike={handleLike}
                isInitiallyLiked={likedList.some(b => b.id === book.id)}
              />
            ))
          ) : (
            <p className={styles.noResult}>{t('noResults')}</p>
          )}
        </div>
        <div className={styles.sidebar}>
          <SideCard likedList={likedList} />
        </div>
      </div>
    </div>
  );
}

export default Books;