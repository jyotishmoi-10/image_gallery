// src/components/ImageItem.js
import React from 'react';
import './ImageItem.css';

const ImageItem = ({ image, onClick }) => {
  return (
    <div className="image-item" onClick={onClick}>
      <img src={image} alt="Gallery item" />
    </div>
  );
};

export default ImageItem;
