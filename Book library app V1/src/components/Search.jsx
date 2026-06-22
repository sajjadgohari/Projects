// src/components/Search.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Search.module.css';

function Search({ search, setSearch, handleSearch }) {
  const { t } = useLanguage();

  return (
    <div className={styles.searchBox}>
      <input 
        type="text" 
        placeholder={t('searchPlaceholder')} 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className={styles.input}
      />
     <button onClick={handleSearch} className={styles.button} aria-label="Search">
        {/* SVG اصلاح شده با viewBox و هندسه استاندارد */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
  );
}

export default Search;