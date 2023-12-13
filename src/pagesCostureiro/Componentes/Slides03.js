import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../imagens/imgcarrousel1.svg';
import img2 from '../../imagens/imgcarrousel2.svg';
import img3 from '../../imagens/imgcarrousel3.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './css/Slide.module.css'

const Carousel3 = () => {
  return (
    <Carousel className={Style.customcarousel}>
      <Carousel.Item className={Style.carouselitem}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Primeiro Slide"
        />
        <Carousel.Caption>
          <button className={Style.buttonCarrousel}>CONTRATE</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={Style.carouselitem}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Segundo Slide"
        />
        <Carousel.Caption>
          <button  className={Style.buttonCarrousel}>CONTRATE</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={Style.carouselitem}>
        <img
          className="d-block w-100"
          src={img1}
          alt="Terceiro Slide"
        />
        <Carousel.Caption>
          <button  className={Style.buttonCarrousel}>CONTRATE</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel3;
