import Style from './css/CostureiroServico.module.css';
import Button from '../imagens/cadastroButtons.svg';
import fotoPerfil from '../imagens/fotoperfil.svg';
import Slide from '../ComponentesIndex/SlidesServiços';
import Header from '../ComponentesIndex/Header';

function AreaPedidos() {
    return(
        <main>
            <Header />
            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p>Escolha um Serviço:</p>
                < img src={Button} alt='botões' />
            </div>

            <section className={Style.conteudoPedidos}>

                <div className={Style.carrousels}>

                    <div className={Style.carrousel}>
                        <span className={Style.perfil}>
                            <img src={fotoPerfil} alt='Imagem perfil. Pessoa Branca' />
                            <p>@PIOULI</p>
                        </span>
                        <Slide />
                    </div>

                    <div className={Style.carrousel}>
                        <span className={Style.perfil}>
                            <img src={fotoPerfil} alt='Imagem perfil. Pessoa Branca' />
                            <p>@PEDROCAS</p>
                        </span>
                        <Slide />
                    </div>

                    <div className={Style.carrousel}>
                        <span className={Style.perfil}>
                            <img src={fotoPerfil} alt='Imagem perfil. Pessoa Branca' />
                            <p>@JAGUATIRICA</p>
                        </span>
                        <Slide />
                    </div>

                   
                </div>

            </section>

        </main>
    )
}

export default AreaPedidos;
