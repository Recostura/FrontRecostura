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
                        <Carousel4 />
                    </div>

                    <div className={Style.carrousel}>
                        <span className={Style.perfil}>
                            <img src={fotoPerfil3} alt='Imagem perfil. Pessoa Branca' />
                            <p>@MELLINHO</p>
                        </span>
                        <Rating />
                        <Carousel5 />
                    </div>

                    <div className={Style.carrousel}>
                        <span className={Style.perfil}>
                            <img src={fotoPerfil2} alt='Imagem perfil. Pessoa Branca' />
                            <p>@BIOCAS</p>
                        </span>
                        <Rating />
                        <Carousel6 />
                    </div>


                </div>

            </section>
      
                


    </div>
    );
}

export default EncontreCostureiro;