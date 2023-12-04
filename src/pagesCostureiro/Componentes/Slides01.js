import React from 'react';
import { Carousel } from 'react-bootstrap';
import calça from '../../imagens/calça.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './css/Slide.module.css'

const Carousel1 = () => {
  return (
    <Carousel className={Style.customcarousel}>
      <Carousel.Item className={Style.carouselitem}>
        <img
          className="d-block w-100"
          src={calça}
          alt="Primeiro Slide"
        />
        <Carousel.Caption>
          <button className={Style.buttonCarrousel}>CONTRATE</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={Style.carouselitem}>
        <img
          className="d-block w-100"
          src={calça}
          alt="Segundo Slide"
        />
        <Carousel.Caption>
          <button  className={Style.buttonCarrousel}>CONTRATE</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={Style.carouselitem}>
        <img
          className="d-block w-100"
          src={calça}
          alt="Terceiro Slide"
        />
        <Carousel.Caption>
          <button  className={Style.buttonCarrousel}>CONTRATE</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel1;
