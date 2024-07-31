// src/components/Gallery.js
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './Gallery.css';

const images = [
  'https://t4.ftcdn.net/jpg/07/23/14/93/360_F_723149335_tA0Fo8zefrHzYlSgXRMYHmBQk7CuWrRd.jpg',
  'https://i.pinimg.com/564x/82/f5/61/82f561311e8135aef3c4d961784ee6d8.jpg',
  'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/awesome-solitude-bess-hamiti.jpg',
  'https://t4.ftcdn.net/jpg/06/97/64/27/240_F_697642775_508sRZ9i6JastrRkbQsg8Fb6KhAcLmRh.jpg','https://t4.ftcdn.net/jpg/06/10/49/85/240_F_610498546_vloxJikme2dyeMO2WkoNFGzdUAmbvwNl.jpg',
  'https://t4.ftcdn.net/jpg/07/41/71/93/240_F_741719394_C9BP3YbiXSJ7WspSDLtKdYxZKKWlf0Jz.jpg','https://t4.ftcdn.net/jpg/07/08/47/75/240_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg',
  'https://t4.ftcdn.net/jpg/06/93/50/89/240_F_693508921_gKBFzoKzSriGPK8jMPFwtGo7efIyUszw.jpg','https://t4.ftcdn.net/jpg/07/18/04/63/240_F_718046364_kXkSXbFuVGxsA5uqdYcKD9JYH2UkN5bR.jpg',
  'https://t4.ftcdn.net/jpg/06/24/34/47/240_F_624344731_ckWMF3DYogWhSUbwhnT7hJuaRGLmyz1R.jpg','https://t3.ftcdn.net/jpg/07/31/95/30/240_F_731953095_sRQUKbIxbf41IU7rDgSwbxPKW8nuLzZC.jpg',
  'https://t4.ftcdn.net/jpg/07/26/87/85/240_F_726878500_ASdXEV4L9FHbIwo4WiDXur7gxqjUEp52.jpg','https://t4.ftcdn.net/jpg/06/06/30/45/240_F_606304551_TmXjR17eovL92dwrmwYvULuxEAvKbBal.jpg',
  'https://t4.ftcdn.net/jpg/06/88/59/15/240_F_688591521_0HIUtJIU4X08avptZXddQMQeK3NwZ7hU.jpg','https://t4.ftcdn.net/jpg/07/03/69/11/240_F_703691171_x6R7VvoX7DvTgw9jb45IycKIwoZAyV70.jpg',
  'https://t4.ftcdn.net/jpg/07/64/01/33/240_F_764013307_QCzBe1PRQ6F2KAJgScAvClQi8BEvWIbv.jpg','https://t4.ftcdn.net/jpg/07/36/27/89/240_F_736278903_fUu1yULjHqSC4WVkirtQtLBGcuPWjeKA.jpg',
  // Add more image URLs here
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default Gallery;
