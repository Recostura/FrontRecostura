import Style from '../css/Inspiracoes.module.css';
import linhas from '../imagens/linhashomes.svg';
import agulha from '../imagens/agulha.svg';
import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../imagens/imghmng.jpg';
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
                    <img src={img1} style={{width: '75%'}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img1} style={{width: '75%'}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img1} style={{width: '75%'}}/>
                </Carousel.Item>
                
            </Carousel>
            <img src={maquina} style={{position: 'relative', top: '-180px', opacity: 0.4}}/>
        </main>
    )
}

export default Inspiracoes;