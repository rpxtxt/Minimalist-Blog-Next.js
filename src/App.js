// src/app.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />
          <Route path="/about" element={<div>About Page</div>} /> {/* Placeholder untuk About */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
