import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

import casaImg from '../../src/img/casa.jpg';
// import cattaniServicosLGImg from '../../src/img/cattaniServicosLG.jpg';
import obraParqueImg from '../../src/img/obraParque.jpg';
// import paredeImg from '../../src/img/parede.jpg';
// import pinturaEstacionamentoImg from '../../src/img/pinturaEstacionamento.jpg';
import pinturaEstacionamento2Img from '../../src/img/pinturaEstacionamento2.jpg';
import vidroImg from '../../src/img/vidro.jpg';
import casa2 from '../img/casa2.jpg';
import massa from '../img/massa.jpg';

const images: string[] = [
  casaImg,
  casa2,
  // cattaniServicosLGImg,
  obraParqueImg,
  // paredeImg,
  // pinturaEstacionamentoImg,
  pinturaEstacionamento2Img,
  massa,
  vidroImg,
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="image-carousel">
      {/* <button className="carousel-button prev" onClick={goToPrevious}>
        &lt;
      </button> */}
      <div className="carousel-image-container">
        <img
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      {/* <button className="carousel-button next" onClick={goToNext}>
        &gt;
      </button> */}
    </div>
  );
};

export default ImageCarousel;
