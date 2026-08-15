import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Living',
    'Sports & Outdoors',
    'Health & Beauty',
    'Groceries',
    'Automotive',
    'Books'
  ];

  return (
    <nav className="navbar">
      {/* Hamburger button */}
      <button 
        className="hamburger-button" 
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="bar">
          <i className='fa fa-bars'></i>
        </span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        {categories.map((category, index) => (
          <li key={index} className="nav-item">
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;