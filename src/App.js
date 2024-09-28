// src/app.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<ArticleDetail />} />
            <Route path="/about" element={<div className="text-center text-2xl">About Page</div>} /> {/* Placeholder untuk About */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
