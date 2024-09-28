// src/components/MarkdownRenderer.js
import React, { useEffect } from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // CSS untuk Prism.js

const MarkdownRenderer = ({ content }) => {
  const renderMarkdown = (markdown) => {
    return { __html: marked(markdown) };
  };

  useEffect(() => {
    Prism.highlightAll(); // Menyoroti semua elemen kode setelah render
  }, [content]);

  return (
    <div className="prose prose-sm lg:prose-base mx-auto mt-4"> {/* Mengubah ukuran font */}
      <div dangerouslySetInnerHTML={renderMarkdown(content)} />
    </div>
  );
};

export default MarkdownRenderer;
