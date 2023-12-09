import Style from '../pagesCliente/css/LocalizandoCostureiro.module.css';
import HeaderLogada from '../pages/HeaderLogada';
import botao from '../imagens/cadastroButtons.svg';

function LocalizandoCostureiro(){

    return(
        <section className={Style.PrincipalLocalizando}>
            <HeaderLogada />
            <div className={Style.localizeCostureiro}>
                <div className={Style.localize} >
                <img src={botao} alt="Botão" className={Style.botao} />
                <h1 className={Style.txtEncontre}>Encontre o costureiro mais perto de você!</h1>
                <img src={botao} alt="Botão" className={Style.botao} />
                </div>
            </div>

        </section>

    )
}

export default LocalizandoCostureiro;