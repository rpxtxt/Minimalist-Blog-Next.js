// src/pages/ArticleDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';

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
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <Link to="/" className="text-blue-500 hover:underline">Back to All Posts</Link>
        <span className="article-date">9 min read • {date}</span>
      </div>
      <div className="mt-4"> {/* Margin atas untuk konten */}
        {content && <MarkdownRenderer content={content} />}
      </div>
    </div>
  );
};

export default ArticleDetail;
