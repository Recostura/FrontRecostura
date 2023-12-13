import Style from '../css/CarroselExemplos.module.css';
import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../imagensCarrosel/ImagemCarrosel (1).png';
import img2 from '../imagensCarrosel/ImagemCarrosel (2).png';
import img3 from '../imagensCarrosel/ImagemCarrosel (3).png';
import img4 from '../imagensCarrosel/ImagemCarrosel (4).png';
import img5 from '../imagensCarrosel/ImagemCarrosel (5).png';
import img6 from '../imagensCarrosel/ImagemCarrosel (6).png';
import linhas from '../imagens/linhashomes.svg';


function CarroselExemplos(){
    return (
        <section className={Style.missao}>
            <div className={Style.caixaTexto}>
                <p className={Style.textoMissao}> Aqui sua costura tem mais valor! </p>
            </div>
            <div className={Style.caixaCarrosel}>
                <Carousel interval={3200} controls indicators itemPerInterval={1}>
                        <Carousel.Item>
                            <div className={Style.Carroselimg}>
                                <img src={img1} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                                <img src={img2} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                                <img src={img3} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                                
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className={Style.Carroselimg}>
                                <img src={img4} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                                <img src={img5} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                                <img src={img6} alt="Descrição da imagem 1" className="d-block w-100" style={{width: '100%', height: '430px'}}/>
                            </div>
                        </Carousel.Item>
                        
                    </Carousel>
            </div>
            <img src={linhas} className={Style.linhahome}/>
        </section>


    )
}

export default CarroselExemplos;