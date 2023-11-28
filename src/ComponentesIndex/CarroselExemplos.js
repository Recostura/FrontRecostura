import Style from '../css/CarroselExemplos.module.css';
import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../imagensCarrosel/ImagemCarrosel (1).png';
import img2 from '../imagensCarrosel/ImagemCarrosel (2).png';
import img3 from '../imagensCarrosel/ImagemCarrosel (3).png';
import linhas from '../imagens/linhashomes.svg';


function CarroselExemplos(){
    return (
        <section className={Style.missao}>
            <div className={Style.caixaTexto}>
                <p className={Style.textoMissao}>Conectando pessoas <br></br> recosturando seus sonhos:</p>
            </div>
            <div className={Style.caixaCarrosel}>
                <Carousel interval={4500} controls indicators itemPerInterval={1}>
                        <Carousel.Item>
                            <div className={Style.Carroselimg}>
                                <img src={img1} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                                <img src={img2} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                                <img src={img3} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className={Style.Carroselimg}>
                                <img src={img1} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                                <img src={img2} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                                <img src={img3} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                            </div>
                        </Carousel.Item>
                        
                    </Carousel>
            </div>
            <img src={linhas} className={Style.linhahome}/>
        </section>


    )
}

export default CarroselExemplos;