// src/App.jsx
import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './layouts/Layout';
import Books from './components/Books';
import './global.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Books />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;