import React from 'react';
import { FaStar, FaStarHalfStroke, FaRegStar } from 'react-icons/fa6';
import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <a className="product" href="#">
      <div>
        <div className="image">
          <img src={props.productImage} alt="Products" />
        </div>
        <div className="description">
          <p className="productName">{props.productName}</p>
          <div className="price">
            <span>{props.productPrice}</span>
            <span>{props.discount}</span>
          </div>
          <div className="rating">
            <span>{props.productRating}</span>
            <div className="comments">({props.Comments})</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
