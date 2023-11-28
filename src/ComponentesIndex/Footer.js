import Style from '../css/Footer.module.css';
import logo from '../imagens/logoFooter.svg';
import insta from '../imagens/instaaaa 1.svg';
import gmail from '../imagens/gmail 1.svg';
import git from '../imagens/gitgit 1.svg';
import fundoft from '../imagens/fundofooter.png'
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <main>
            <div className={Style.footer}>
                <div className={Style.logofooter}>
                    <img src={logo} alt='logo'/>
                </div>
                <div className={Style.links}>
                    <div className={Style.minhaconta}>
                        <ul>
                            <h1>MINHA CONTA</h1>
                            <li>Meu perfil</li>
                            <li>Fazer cadstro</li>
                        </ul>
                    </div>
                    <div className={Style.atendimento}>
                        <ul>
                            <h1>ATENDIMENTO AO CLIENTE</h1>
                            <li>Fale conosco</li>
                            <li>Dúvidas frequentes</li>
                        </ul>
                    </div>
                    <div className={Style.sobre}>
                        <ul>
                            <h1>SOBRE</h1>
                            <li>Sobre nós</li>
                            <li>Sustentabilidade</li>
                            <li>Parceiros</li>
                        </ul>
                    </div>
                </div>
                <div className={Style.apps}>
                    <Link to=''><img src={insta}/></Link>
                    <Link to=''><img src={gmail}/></Link>
                    <Link to=''><img src={git}/></Link>
                </div>
                <p className={Style.pfooter}>Direitos Autorais © 2023 Recostura</p>
            </div>
        </main>
    )
}

export default Footer;