import React from 'react';
import './Footer.css';
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Customer Care</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">How to Buy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Daraz</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Daraz Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
         <a href="https://daraz.pk" target='_blank'>
           <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="Daraz" />
         </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; official_ahmad </p>
      </div>
    </footer>
  );
};

export default Footer;
