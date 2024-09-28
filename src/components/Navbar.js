// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md mb-6"> {/* Menambahkan margin bawah */}
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">RPX</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
