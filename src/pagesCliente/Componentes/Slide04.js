import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../imagens/imgcarrousel1.svg';
import img2 from '../../imagens/imgcarrousel2.svg';
import img3 from '../../imagens/imgcarrousel3.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from '../../pagesCostureiro/Componentes/css/Slide.module.css';
import { Link } from 'react-router-dom';


const Carousel4 = () => {
  return (
    <Carousel className={Style.customcarousel}>
      <Carousel.Item className={Style.carouselitem}>
        <img
          className="d-block w-100"
          src={img1}
          alt="Primeiro Slide"
        />
        <Carousel.Caption>
          <Link to='/AtualizacaoPedido'>
            <button className={Style.buttonCarrousel}>CONTRATE</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={Style.carouselitem}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Segundo Slide"
        />
        <Carousel.Caption>
          <Link to='/AtualizacaoPedido'>
            <button className={Style.buttonCarrousel}>CONTRATE</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={Style.carouselitem}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Terceiro Slide"
        />
        <Carousel.Caption>
          <Link to='/AtualizacaoPedido'>
            <button className={Style.buttonCarrousel}>CONTRATE</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel4;
