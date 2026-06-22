// src/layouts/Layout.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import styles from './Layout.module.css';

function Layout({ children }) {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.controls}>
          {/* انتخاب زبان */}
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className={styles.select}
          >
            <option value="en">English (EN)</option>
            <option value="fr">Français (FR)</option>
          </select>

          {/* دکمه تغییر تم */}
          <button onClick={toggleTheme} className={styles.themeBtn}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>

        <div className={styles.headerContainer}>
          <h1>{t('title')}</h1>
          <p>{t('subtitle')}</p>
        </div>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        <p>{t('footer')}</p>
      </footer>
    </div>
  );
}

export default Layout;