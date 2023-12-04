import Style from './css/CostureiroServico.module.css';
import Button from '../imagens/cadastroButtons.svg';
import fotoPerfil from '../imagens/fotoperfil.svg';
import Header from '../ComponentesIndex/Header';
import Carousel1 from './Componentes/Slides01';
import Carousel2 from './Componentes/Slides02';
import Carousel3 from './Componentes/Slides03';
import Footer from '../ComponentesIndex/Footer';

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
                        <Carousel1 />
                    </div>

                    <div className={Style.carrousel}>
                        <span className={Style.perfil}>
                            <img src={fotoPerfil} alt='Imagem perfil. Pessoa Branca' />
                            <p>@PEDROCAS</p>
                        </span>
                        <Carousel2 />
                    </div>

                    <div className={Style.carrousel}>
                        <span className={Style.perfil}>
                            <img src={fotoPerfil} alt='Imagem perfil. Pessoa Branca' />
                            <p>@JAGUATIRICA</p>
                        </span>
                        <Carousel3 />
                    </div>


                </div>

            </section>

            <Footer />
        </main>

    )
}

export default AreaPedidos;