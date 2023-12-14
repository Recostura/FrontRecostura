import Header from '../ComponentesIndex/Header';
import Footer from '../ComponentesIndex/Footer'
import Button from '../imagens/cadastroButtons.svg'
import info from '../imagens/interrogração.svg'
import Style from './css/Cadastro.module.css'
import InfoPessoalForm from './Componentes/pessoainfo';
import Cep from './Componentes/cep';
import { Link } from "react-router-dom";
import SenhaCadastro from './Componentes/SenhaCadastro';
import SaldoBonus from './Componentes/SaldoBonus_Modal';


function Cadastro() {
    return (
        <main className={Style.pageCadastro}>
            <Header />

            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p>Olá, Costureiro(a)! <br /> Crie sua conta:</p>
                <img src={Button} alt='botões' />
            </div>

            <SenhaCadastro />

            <InfoPessoalForm />

            <Cep />
            
            <SaldoBonus />


            <section className={Style.forms4}>
                <forms className={Style.checkbox}>
                    <div className={Style.checkbox1}>
                        <input type="checkbox" />
                        <label for="coding"> Eu aceito receber informações por e-mail sobre ofertas, serviços, produtos e eventos da Recostura ou de outras empresas<br />parceiras.</label>
                    </div>
                    <div className={Style.checkbox1}>
                        <input type="checkbox" />
                        <label for="coding"> Ao criar uma conta, você aceita e concorda com os <b>Termos Gerais e Condições de Uso</b> e que seus dados serão processados em<br /> conformidade com a da Recostura.</label>
                    </div>
                </forms>
                <Link to='/CostureiroPerfil' className={Style.linkButton}>
                    <button className={Style.conectar}>BORA COSTURAR!</button>
                </Link>
            </section>

            <Footer />

        </main>
    )
}

export default Cadastro;