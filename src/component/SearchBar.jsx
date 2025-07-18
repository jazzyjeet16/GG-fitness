// src/components/SearchBar.jsx
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import '../css/SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text"  />
      <FiSearch className="search-icon" />
    </div>
  );
}
