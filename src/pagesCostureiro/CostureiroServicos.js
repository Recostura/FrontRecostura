import Style from './css/CostureiroServico.module.css';
import Button from '../imagens/cadastroButtons.svg';
import perfil1 from '../imagens/fotoperfil.svg';
import perfil2 from '../imagens/imgperfil2.svg';
import perfil3 from '../imagens/imgperfil3.svg';
import Carousel1 from './Componentes/Slides01';
import Carousel2 from './Componentes/Slides02';
import Carousel3 from './Componentes/Slides03';
import Footer from '../ComponentesIndex/Footer';
import HeaderLogada from '../pages/HeaderLogada';

function AreaPedidos() {
    return(
        <main>
            <HeaderLogada />
            <div className={Style.ContainerServicos}>
                <div className={Style.buttonsAndFrase}>
                    <img src={Button} alt='botões' />
                    <p>Escolha um Serviço:</p>
                    < img src={Button} alt='botões' />
                </div>

                <section className={Style.conteudoPedidos}>

                    <div className={Style.carrousels}>

                        <div className={Style.carrousel}>
                            <span className={Style.perfil}>
                                <img src={perfil1} alt='Imagem perfil. Pessoa Branca' />
                                <p>@PIOULI</p>
                            </span>
                            <Carousel1 />
                        </div>

                        <div className={Style.carrousel}>
                            <span className={Style.perfil}>
                                <img src={perfil2} alt='Imagem perfil. Pessoa Branca' />
                                <p>@PEDROCAS</p>
                            </span>
                            <Carousel2 />
                        </div>

                        <div className={Style.carrousel}>
                            <span className={Style.perfil}>
                                <img src={perfil3} alt='Imagem perfil. Pessoa Branca' />
                                <p>@JAGUATIRICA</p>
                            </span>
                            <Carousel3 />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>

    )
}

export default AreaPedidos;