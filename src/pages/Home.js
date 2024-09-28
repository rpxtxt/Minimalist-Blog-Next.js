// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import Navbar
import './Home.css'; // Import CSS untuk styling

const loadArticles = () => {
  const context = require.context('../articles', false, /\.md$/);
  return context.keys().map((key) => {
    return { file: key.replace('./', '').replace('.md', '') };
  });
};

const getExcerpt = (content) => {
  const sentences = content.split('. ');
  if (sentences.length > 1) {
    return sentences[0] + '.'; // Ambil kalimat pertama sebagai cuplikan
  }
  return content; // Jika tidak ada kalimat, ambil konten utuh
};

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticleData = async () => {
      const articlesData = loadArticles();
      const articlesWithMeta = await Promise.all(
        articlesData.map(async (article) => {
          const response = await import(`../articles/${article.file}.md`);
          const articleContent = await fetch(response.default).then(res => res.text());

          // Mengambil metadata dari konten
          const metadata = articleContent.match(/---\n([\s\S]*?)---/);
          let title = article.file.replace(/-/g, ' '); // Judul default
          let date = '';
          let excerpt = '';

          if (metadata) {
            const metaContent = metadata[1];
            const dateMatch = metaContent.match(/date:\s*(.*)/);
            const titleMatch = metaContent.match(/title:\s*"(.*)"/);
            if (dateMatch) {
              date = new Date(dateMatch[1]).toLocaleDateString(); // Format tanggal
            }
            if (titleMatch) {
              title = titleMatch[1]; // Ambil judul dari metadata
            }

            // Menghapus metadata dari konten dan mendapatkan cuplikan
            const contentWithoutMetadata = articleContent.replace(metadata[0], '');
            excerpt = getExcerpt(contentWithoutMetadata); // Ambil cuplikan menggunakan fungsi
          }

          return { title, date, excerpt, file: article.file };
        })
      );
      setArticles(articlesWithMeta);
    };

    loadArticleData();
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="article-list">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <Link to={`/blog/${article.file}`} className="article-link">
              <h3>{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
