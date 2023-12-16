import Style from '../css/Footer.module.css';
import logo from '../imagens/logoFooter.svg';
import insta from '../imagens/instaaaa 1.svg';
import gmail from '../imagens/gmail 1.svg';
import git from '../imagens/gitgit 1.svg';
import fundoft from '../imagens/fundofooter.png'
import { Link, NavLink } from 'react-router-dom';

function Footer() {
    return (
        <main>
            <div className={Style.footer}>
                <div className={Style.logofooter}>
                    <img src={logo} alt='logo' />
                </div>
                <div className={Style.links}>
                    <div className={Style.minhaconta}>
                        <ul>
                            <h1>MINHA CONTA</h1>
                            <NavLink to='/CadastroCli' className={Style.obggui}><li>Buscar Costureiro</li></NavLink>
                            <NavLink to='/Cadastro' className={Style.obggui}><li>Ser Costureiro</li></NavLink>
                        </ul>
                    </div>
                    <div className={Style.atendimento}>
                        <ul>
                            <h1>ATENDIMENTO AO CLIENTE</h1>
                            <NavLink to='https://wa.me/5511965102131?text=Olá,%20Recostura!' className={Style.obggui}><li>Fale conosco</li></NavLink>
                            <NavLink to='https://linktr.ee/recostura' className={Style.obggui}><li>Dúvidas</li></NavLink>
                        </ul>
                    </div>
                    <div className={Style.sobre}>
                        <ul>
                            <h1>SOBRE</h1>
                            <NavLink to='/SobreNos' className={Style.obggui}><li>Sobre nós</li></NavLink>
                            <NavLink to='/Parceiros' className={Style.obggui}><li>Parceiros</li></NavLink>

                        </ul>
                    </div>
                </div>
                <div className={Style.apps}>
                    <Link to='https://instagram.com/recosttura?igshid=NzZlODBkYWE4Ng=='><img src={insta} /></Link>
                    <Link to='mailto:recostura.contato@gmail.com'><img src={gmail} /></Link>
                    <Link to='https://github.com/Recostura'><img src={git} /></Link>
                </div>
                <p className={Style.pfooter}>Direitos Autorais © 2023 Recostura</p>
            </div>
        </main>
    )
}

export default Footer;