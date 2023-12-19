import Style from "./css/EncontreCostureiro.module.css";
import Button from "../imagens/cadastroButtons.svg";
import HeaderL from "../pages/HeaderLogada";
import AutoCarousel from "../Components/AutoCarousel";
import Agulha from "../imagens/agulha.svg";
import Rating from "../Components/RatingSystem";

import fotoPerfil from '../imagens/fotoperfil.svg';
import fotoPerfil2 from '../imagens/fotoperfil2.svg';
import fotoPerfil3 from '../imagens/fotoperfil3.svg';
import Carousel4 from '../pagesCliente/Componentes/Slide04';
import Carousel5 from '../pagesCostureiro/Componentes/Slides02';
import Carousel6 from '../pagesCostureiro/Componentes/Slides03';

import React, {useEffect, useState} from 'react';

function EncontreCostureiro(){

    const[pessoas, setCostureiro]=useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/recostura/pessoa/getAll", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
      })
  
      .then(res=>res.json())
  
      .then((result)=>{
        console.log(result)
        setCostureiro(result)
      } 
      ).catch(error => console.log(error))
  
    },[])

    return(
        <div>
            <HeaderL />
            <div className={Style.block}></div>
            <AutoCarousel />

            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p> Escolha seu costureiro!</p>
                <img src={Button} alt='botões' />
            </div>


            <section className={Style.conteudoPedidos}>
                <div className={Style.carrousels}>
                    {/* {pessoas.map(pessoa =>(
                         <div className={Style.carrousel}>
                         <span className={Style.perfil}>
                             <img src={fotoPerfil} alt='Imagem perfil. Pessoa Branca' />
                             <p>{pessoa.userName}</p>
                             <img className={Style.imgPlano} src={Agulha} alt='Agulha, simbolo da assinatura' />
                         </span>
                         <Rating />
                         <Carousel4 />
                     </div> 

                    ))} */}


                   
                   
                        
                </div>

            </section>
      
                


    </div>
    );
}

export default EncontreCostureiro;