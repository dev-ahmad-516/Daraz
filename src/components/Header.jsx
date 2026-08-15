import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <a href="https://www.daraz.pk/#?">
            <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="Daraz Logo" />
          </a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Products, Brands and More" />
          <i className='fa fa-search'></i>
        </div>
        <div className="user-actions">
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
          <a href="#">زبان تبدیل کریں</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
