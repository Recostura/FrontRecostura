
import Header from '../ComponentesIndex/Header';
import Footer from '../ComponentesIndex/Footer'
import Button from '../imagens/cadastroButtons.svg'
import info from '../imagens/interrogração.svg'
import FormularioDataNascimento from '../pages/Componentes/DataNascimento';
import Style from './css/cadastrocli.module.css';
import Senha from './Componentes/Senha';
import Inf from './Componentes/Inf';
import Local from './Componentes/Local';
import Foto from './Componentes/Foto';


function CadastroCli() {
    return(
        <main className={Style.pageCadastro}>
            <Header />

            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p>Olá, seja bem-vindo! <br /> Crie sua conta:</p>
                <img src={Button} alt='botões' />
            </div>

            <Foto/>

            <Senha/>

            <Inf/>

            <FormularioDataNascimento />

            <Local/>

            

            <section className={Style.forms4}>
                <forms className={Style.checkbox}>
                <div className={Style.checkbox1}>
                    <input type="checkbox"/>
                    <label for="coding"> Eu aceito receber informações por e-mail sobre ofertas, serviços, produtos e eventos da Recostura ou de outras empresas<br/>parceiras.</label>
                </div>
                <div className={Style.checkbox1}>
                    <input type="checkbox"/>
                    <label for="coding"> Ao criar uma conta, você aceita e concorda com os <b>Termos Gerais e Condições de Uso</b> e que seus dados serão processados em<br/> conformidade com a da Recostura.</label>
                </div>
                </forms>

                <button className={Style.conectar}>BORA RECOSTURAR!</button>
            </section>

        <Footer/>

        </main>
    )
}

export default CadastroCli;