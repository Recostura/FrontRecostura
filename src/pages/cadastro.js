
import Header from '../ComponentesIndex/Header';
import Footer from '../ComponentesIndex/Footer'
import Button from '../imagens/cadastroButtons.svg'
import info from '../imagens/interrogração.svg'
import Style from './css/cadastro.module.css'
import FormularioDataNascimento from './Componentes/DataNascimento';
import SenhaEmail from './Componentes/SenhaEmail';
import InfoPessoalForm from './Componentes/pessoainfo';
import InfoPessoal from './Componentes/cep';

function Cadastro() {
    return(
        <main className={Style.pageCadastro}>
            <Header />

            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p>Olá, Costureiro(a)! <br /> Crie sua conta:</p>
                <img src={Button} alt='botões' />
            </div>

<<<<<<< HEAD
            <section className={Style.forms1}>
                <form className={Style.nomeSenha}>
                    <input type="text" placeholder='E-mail:' className={Style.forms1_input} /> <br/>
                    <input type="password" placeholder='Senha:' className={Style.forms1_input} /> <br />
                    <PasswordStrength />
                </form>
            </section>
=======
            
            <SenhaEmail/>
>>>>>>> a827d487f133cf07a7b3c6ee7c6dc77d6530123d

            <InfoPessoalForm/>

            <FormularioDataNascimento />

            <InfoPessoal/>
   

                <div className={Style.bonus}>
                   <div className={Style.paragraph}>
                        <p>Saldo: R$30,00 (bonus)</p>
                   </div>
                   <div className={Style.buttonInfo}>
                        < img src={info} alt='ponto de interrogação' />
                   </div>
                </div>   
        

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

                <button className={Style.conectar}>BORA COSTURAR!</button>
            </section>

        <Footer/>

        </main>
    )
}

export default Cadastro;