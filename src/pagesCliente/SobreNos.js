import Style from './css/SobreNos.module.css';
import Linha from './images/linha.svg';
import botaoImg from './images/botaoimg.svg';
import Missao from './images/missao.svg';
import Visao from './images/visao.svg';
import Valores from './images/valores.svg';
import Equipe from './images/equipe.svg';
import img1 from './images/img1.svg';
import img2 from './images/img2.svg';
import img3 from './images/img3.svg';
import img4 from './images/img4.svg';
import img5 from './images/img5.svg';
import img6 from './images/img6.svg';
import img7 from './images/img7.svg';
import img8 from './images/img8.svg';
import Agulha from './images/agulha.svg';
import HeaderLogada from '../pages/HeaderLogada';
import Footer from '../ComponentesIndex/Footer';
import { Link } from 'react-router-dom';

function SobreNos() {
    return (
        <main className={Style.sobreNos}>
            <HeaderLogada />
            <dvi className={Style.titulo}>
                <h2>Quem faz o Recostura acontecer?</h2>
            </dvi>

            <section className={Style.mvv}>
                <img src={Linha} alt='linha' className={Style.imglinha} />
                <img src={botaoImg} alt='Imagem Botão' className={Style.botaoImg} />

                <div className={Style.caixaMVV}>
                    <div className={Style.caixaprincipal}>
                        <img src={Missao} alt='imagem alvo' />
                        <div className={Style.textMVV}>

                            <h3>Missão</h3>
                            <p>Superar os desafios enfrentados
                                pelos costureiros,
                                proporcionando oportunidades
                                de trabalho e reconhecimento.
                            </p>

                        </div>
                    </div>
                    <div className={Style.caixaprincipal}>
                        <img src={Visao} alt='imagem alvo' />
                        <div className={Style.textMVV}>

                            <h3>Visão</h3>
                            <p>A criação de uma plataforma
                                onde costureiros e clientes se
                                conectam de maneira eficiente,
                                gerando renda e apoio.
                            </p>

                        </div>
                    </div>
                    <div className={Style.caixaprincipal}>
                        <img src={Valores} alt='imagem alvo' />
                        <div className={Style.textMVV}>

                            <h3>Valores</h3>
                            <p>Transformação social e
                                econômica, pois a plataforma
                                não é apenas sobre reparos,
                                mas sobre criar oportunidades.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <section className={Style.areaQuemSomos}>
                <img src={Linha} alt='linha' className={Style.imglinha} />

                <div className={Style.textAndImg}>
                    <div className={Style.textQS}>
                        <h3>QUEM SOMOS</h3>
                        <p>A Recostura nasceu em 2023 com o objetivo de conectar clientes com profissionais da costura. Através da nossa plataforma, tudo será abotoado e seus sonhos serão recosturados.</p>
                    </div>
                    <img src={Equipe} alt='Grupo Recostura' />
                </div>
            </section>

            <section className={Style.container001}>
                <div className={Style.textDestaque}>
                    <img src={Agulha} alt='agulha e linha' />
                    <p>EQUIPE</p>
                    <img src={Agulha} alt='agulha e linha' />
                </div>

                <div className={Style.conteudoImg}>

                    <div className={Style.imagens}>
                        <div className={Style.nomeFuncao}>
                            <Link to='https://www.linkedin.com/in/anderson-soares-60a3b528a/' target="_blank" > <img src={img1} alt='menino' /> </Link>
                            <h4>Anderson Soarez</h4>
                            <div className={Style.Funcao}>
                                <p>Scrum Master</p>
                                <p>Front-end</p>
                            </div>
                        </div>
                        <div className={Style.nomeFuncao}>
                            <Link to='https://www.linkedin.com/in/beatriz-sanches-dev/' target="_blank" >
                                <img src={img2} alt='menino' />
                            </Link>
                            <h4>Beatriz Sanches</h4>
                            <div className={Style.Funcao2}>
                                <p>Full Stack</p>
                            </div>
                        </div>
                        <div className={Style.nomeFuncao}>
                            <Link to='https://www.linkedin.com/in/emili-pioli/' target="_blank" >
                                <img src={img3} alt='menino' />
                            </Link>
                            <h4>Emili Pioli</h4>
                            <div className={Style.Funcao}>
                                <p>Product Owner</p>
                                <p>Front-end</p>
                            </div>
                        </div>
                        <div className={Style.nomeFuncao}>
                            <Link to='www.linkedin.com/in/guilherme-araujo-888499268' target="_blank" >
                                <img src={img4} alt='menino' />
                            </Link>
                            <h4>Guilherme Cordeiro</h4>
                            <div className={Style.Funcao2}>
                                <p>Front-End</p>
                            </div>
                        </div>
                    </div>

                    <div className={Style.imagens}>
                        <div className={Style.nomeFuncao}>
                            <Link to='https://www.linkedin.com/in/guilherme-mello-928837214/' target="_blank" >
                                <img src={img5} alt='menino' />
                            </Link>
                            <h4>Guilherme Mello</h4>
                            <div className={Style.Funcao}>
                                <p>Scrum Master</p>
                                <p>Full Stack</p>
                            </div>
                        </div>
                        <div className={Style.nomeFuncao}>
                            <Link to='https://www.linkedin.com/in/jian-m-6303a0226/' target="_blank" >
                                <img src={img6} alt='menino' />
                            </Link>
                            <h4>Jian Magdiel</h4>
                            <div className={Style.Funcao}>
                                <p>Financeiro</p>
                                <p>Front-End</p>
                            </div>
                        </div>
                        <div className={Style.nomeFuncao}>
                            <Link to='https://www.linkedin.com/in/josé-victor-barros-fontes/' target="_blank" >
                                <img src={img7} alt='menino' />
                            </Link>
                            <h4>José Victor</h4>
                            <div className={Style.Funcao2}>
                                <p>Full Stack</p>
                            </div>
                        </div>
                        <div className={Style.nomeFuncao}>
                            <Link to='https://www.linkedin.com/in/pedro-augusto-91544b288/' target="_blank" >
                                <img src={img8} alt='menino' />
                            </Link>
                            <h4>Pedro Augusto</h4>
                            <div className={Style.Funcao2}>
                                <p>Full Stack</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default SobreNos;