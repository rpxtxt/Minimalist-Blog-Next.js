// src/components/MarkdownRenderer.js
import React, { useEffect } from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // CSS untuk Prism.js
import './MarkdownRenderer.css'; // Styling tambahan jika diperlukan

const MarkdownRenderer = ({ content }) => {
  const renderMarkdown = (markdown) => {
    return { __html: marked(markdown) };
  };

  useEffect(() => {
    Prism.highlightAll(); // Menyoroti semua elemen kode setelah render
  }, [content]);

  return (
    <div className="markdown-body" dangerouslySetInnerHTML={renderMarkdown(content)} />
  );
};

export default MarkdownRenderer;
