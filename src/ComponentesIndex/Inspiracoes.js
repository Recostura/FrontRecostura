import Style from '../css/Inspiracoes.module.css';
import linhas from '../imagens/linhashomes.svg';
import agulha from '../imagens/agulha.svg';
import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import 'bootstrap/dist/css/bootstrap.css';

import img1 from '../imagens/biamae 1.png';
import img2 from '../imagens/veramae 1.png';
import img3 from '../imagens/jianmae 1.png';
import img4 from '../imagens/davimae 1.png';
import img5 from '../imagens/renanmae 1.png';
import img6 from '../imagens/emimae 1.png';


import maquina from '../imagens/maquinahome.png';


function Inspiracoes(){
    return(
        <main>
            <img src={linhas} style={{width: '100%', position: 'relative'}}/>
            <div className={Style.caixap}>
                <img src={agulha}/>
                <p>Nossas Inspirações :</p>
                <img src={agulha}/>
            </div>
            <Carousel>

                <Carousel.Item>
                    <img src={img1} style={{width: '65%'}}/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img2} style={{width: '65%'}}/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img3} style={{width: '65%'}}/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img4} style={{width: '65%'}}/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img5} style={{width: '65%'}}/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img6} style={{width: '65%'}}/>
                </Carousel.Item>
                
            </Carousel>
            <img src={maquina} style={{position: 'relative', top: '-180px', opacity: 0.4}}/>
        </main>
    )
}

export default Inspiracoes;