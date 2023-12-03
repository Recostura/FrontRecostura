import Style from "./css/EncontreCostureiro.module.css";
import Button from "../imagens/cadastroButtons.svg";
import Header from "../ComponentesIndex/Header";
import AutoCarousel from "../Components/AutoCarousel";
import FaceUser from "./images/FaceUser.svg";
import Agulha from "../imagens/agulha.svg";
import Rating from "../Components/RatingSystem";

function EncontreCostureiro(){
    return(
        <div>
            <Header />
            <div className={Style.block}></div>
            <AutoCarousel />

            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p> Escolha seu costureiro!</p>
                <img src={Button} alt='botões' />
            </div>

    <div className={Style.main}>
            <div class={Style.wrapper}>
                <div class={Style.icon}></div>
                 <p class={Style.input}>@PIOLLI</p>
                 <div class={Style.icon2}></div>
            </div>  
                <Rating />
        </div>

    </div>
    );
}

export default EncontreCostureiro;