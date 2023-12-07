import Style from "./css/EncontreCostureiro.module.css";
import Button from "../imagens/cadastroButtons.svg";
import HeaderL from "../pages/HeaderLogada";
import AutoCarousel from "../Components/AutoCarousel";
import Agulha from "../imagens/agulha.svg";
import Rating from "../Components/RatingSystem";

import fotoPerfil from '../imagens/fotoperfil.svg';
import fotoPerfil2 from '../imagens/fotoperfil2.svg';
import fotoPerfil3 from '../imagens/fotoperfil3.svg';
import Carousel1 from '../pagesCostureiro/Componentes/Slides01';
import Carousel2 from '../pagesCostureiro/Componentes/Slides02';
import Carousel3 from '../pagesCostureiro/Componentes/Slides03';

function EncontreCostureiro(){
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

                    <div className={Style.carrousel}>
                        <span className={Style.perfil}>
                            <img src={fotoPerfil} alt='Imagem perfil. Pessoa Branca' />
                            <p>@ARAUJO</p>
                            <img className={Style.imgPlano} src={Agulha} alt='Agulha, simbolo da assinatura' />
                        </span>
                        <Rating />
                        <Carousel1 />
                    </div>

                    <div className={Style.carrousel}>
                        <span className={Style.perfil}>
                            <img src={fotoPerfil3} alt='Imagem perfil. Pessoa Branca' />
                            <p>@MELLINHO</p>
                        </span>
                        <Rating />
                        <Carousel2 />
                    </div>

                    <div className={Style.carrousel}>
                        <span className={Style.perfil}>
                            <img src={fotoPerfil2} alt='Imagem perfil. Pessoa Branca' />
                            <p>@BIOCAS</p>
                        </span>
                        <Rating />
                        <Carousel3 />
                    </div>


                </div>

            </section>
      
                


    </div>
    );
}

export default EncontreCostureiro;