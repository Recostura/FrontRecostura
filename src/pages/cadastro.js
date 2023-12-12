
import Header from '../ComponentesIndex/Header';
import Footer from '../ComponentesIndex/Footer'
import Button from '../imagens/cadastroButtons.svg'
import info from '../imagens/interrogração.svg'
import Style from './css/cadastro.module.css'
import FormularioDataNascimento from './Componentes/DataNascimento';
import PasswordStrength from './Componentes/ForçaSenha';


function Cadastro() {
    return(
        <main className={Style.pageCadastro}>
            <Header />

            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p>Olá, Costureiro(a)! <br /> Crie sua conta:</p>
                <img src={Button} alt='botões' />
            </div>

           <Email

            <section className={Style.forms2}>
                <p className={Style.Ifpessoal_text}>Informações Pessoais</p>
                <form className={Style.infoPessoal}>
                    <input type="text" placeholder='Nome Completo:' className={Style.forms2_input} /> <br/>
                    <input type="text" placeholder='Nome de Usuário:' className={Style.forms2_input} /> <br/>
                    <input type="number" placeholder='CPF:' className={Style.forms2_input} /> <br/>

                    <div className={Style.divNumero}>
                        <div className={Style.ddd}>
                            <p>+55</p>
                        </div>
                        <input type="number" placeholder='Celular:' className={Style.clienteNumero}/> <br/>
                    </div>
                    <FormularioDataNascimento />
                </form>
            </section>

            <section className={Style.forms3}>
                <p className={Style.text1}>Localizaçao</p>
                <forms className={Style.localizacao}>
                    <div className={Style.CPE}>
                        <input type="text" placeholder='CPE:' className={Style.ceep}/> <br/>
                        <input type="text" placeholder='Endereço:' className={Style.endereço}/> <br/>
                    </div> <br />

                    <div className={Style.nBairro}>
                        <input type="text" placeholder='Nº:' className={Style.Nº}/> <br/>
                        <input type="text" placeholder='Bairro:' className={Style.bairro}/> <br/>
                    </div> <br />
                    <div className={Style.estadoP}>
                        <input type="text" placeholder='Estado:' className={Style.estado}/> <br/>
                        <div className={Style.areaPaís}>
                            <select name="mes" className={Style.país}>
                            <option value="">País</option>
                            <option value="1">Argentina</option>
                            <option value="2">Bolívia</option>
                            <option value="3">Brasil</option>
                            <option value="4">Chile</option>
                            <option value="5">Colômbia</option>
                            <option value="6">Equador</option>
                            <option value="7">Guiana</option>
                            <option value="8">Paraguai</option>
                            <option value="9">Peru</option>
                            <option value="10">Surirame</option>
                            <option value="11">Uruguai</option>
                            <option value="12">Venezuela</option>
                            </select>
                        </div>
                    </div> <br />
                </forms> 

                <div className={Style.bonus}>
                   <div className={Style.paragraph}>
                        <p>Saldo: R$30,00 (bonus)</p>
                   </div>
                   <div className={Style.buttonInfo}>
                        < img src={info} alt='ponto de interrogação' />
                   </div>
                </div>   
            </section>

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