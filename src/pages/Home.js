// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import Navbar

const loadArticles = () => {
  const context = require.context('../articles', false, /\.md$/);
  return context.keys().map((key) => {
    return { file: key.replace('./', '').replace('.md', '') };
  });
};

const getExcerpt = (content) => {
  const sentences = content.split('. ');
  return sentences.length > 1 ? sentences[0] + '.' : content; // Ambil kalimat pertama sebagai cuplikan
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

          const metadata = articleContent.match(/---\n([\s\S]*?)---/);
          let title = article.file.replace(/-/g, ' ');
          let date = '';
          let excerpt = '';

          if (metadata) {
            const metaContent = metadata[1];
            const dateMatch = metaContent.match(/date:\s*(.*)/);
            const titleMatch = metaContent.match(/title:\s*"(.*)"/);
            if (dateMatch) {
              date = new Date(dateMatch[1]).toLocaleDateString();
            }
            if (titleMatch) {
              title = titleMatch[1];
            }
            const contentWithoutMetadata = articleContent.replace(metadata[0], '');
            excerpt = getExcerpt(contentWithoutMetadata);
          }

          return { title, date, excerpt, file: article.file };
        })
      );
      setArticles(articlesWithMeta);
    };

    loadArticleData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Navbar />
      <div className="grid grid-cols-1 gap-6">
        {articles.map((article, index) => (
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300" key={index}>
            <Link to={`/blog/${article.file}`} className="text-decoration-none">
              <h3 className="text-2xl font-semibold text-gray-800">{article.title}</h3>
              <p className="text-gray-600 my-2">{article.excerpt}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{article.date}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
