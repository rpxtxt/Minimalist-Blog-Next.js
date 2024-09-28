// src/pages/ArticleDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import './ArticleDetail.css'; // Import CSS untuk styling

const ArticleDetail = () => {
  const { slug } = useParams(); // Mendapatkan slug dari URL
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const response = await import(`../articles/${slug}.md`); // Memuat artikel berdasarkan slug
        const articleContent = await fetch(response.default).then(res => res.text());

        // Mengambil metadata dari konten
        const metadata = articleContent.match(/---\n([\s\S]*?)---/);
        if (metadata) {
          const metaContent = metadata[1];
          const dateMatch = metaContent.match(/date:\s*(.*)/);
          const titleMatch = metaContent.match(/title:\s*"(.*)"/);
          
          if (dateMatch) {
            setDate(new Date(dateMatch[1]).toLocaleDateString()); // Format tanggal
          }
          if (titleMatch) {
            setTitle(titleMatch[1]); // Ambil judul dari metadata
            document.title = titleMatch[1]; // Ubah judul halaman
          }
          // Menghapus metadata dari konten
          const cleanedContent = articleContent.replace(metadata[0], '');
          setContent(cleanedContent);
        }
      } catch (error) {
        console.error('Error loading article:', error);
      }
    };

    loadArticle();
  }, [slug]);

  return (
    <div className="article-detail-container">
      <h1 className="article-title">{title}</h1> {/* Tampilkan judul dari metadata */}
      <div className="article-meta">
        <span className="article-author">crycapital</span>
        <span className="article-date">9 min read • {date}</span> {/* Tanggal otomatis */}
      </div>
      {content && <MarkdownRenderer content={content} />}
    </div>
  );
};

export default ArticleDetail;
