
import Header from '../ComponentesIndex/Header';


import Style from './css/cadastro.module.css'
import Button from '../imagens/cadastroButtons.svg'
import info from '../imagens/interrogração.svg'

function Cadastro() {
    return(
        <main className={Style.pageCadastro}>
            <Header />

            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p>Olá, Costureiro(a)! <br /> Crie sua conta:</p>
                <img src={Button} alt='botões' />
            </div>

            <section className={Style.forms1}>
                <form className={Style.nomeSenha}>
                    <input type="text" placeholder='E-mail:' /> <br/>
                    <input type="text" placeholder='Senha:'/> <br />
                    <input type="text" placeholder='Senha:'/> <br/>
                </form>
            </section>

            <section className={Style.forms2}>
                <p>Informações Pessoais</p>
                <form className={Style.infoPessoal}>
                    <input type="text" placeholder='Nome Completo:'/> <br/>

                    <input type="text" placeholder='Nome de Usuário:'/> <br/>

                    <input type="text" placeholder='CPF:'/> <br/>

                    <div className={Style.divNumero}>
                        <div className={Style.ddd}>
                            <p>+55</p>
                        </div>
                        <input type="text" placeholder='Celular:' className={Style.clienteNumero}/> <br/>
                    </div>
                </form>
            </section>

            <section className={Style.forms3}>
                <p>Localizaçao</p>
                <forms className={Style.localizacao}>
                    <div className={Style.cpe}>
                        <input type="text" placeholder='CPE:' className={Style.ceep}/> <br/>
                        <input type="text" placeholder='Endereço:' className={Style.endereço}/> <br/>
                    </div>

                    <div className={Style.nBairro}>
                        <input type="text" placeholder='Nº:' className={Style.Nº}/> <br/>
                        <input type="text" placeholder='Bairro:' className={Style.bairro}/> <br/>
                    </div>
                    <div className={Style.estadoP}>
                        <input type="text" placeholder='Estado:' className={Style.estado}/> <br/>
                        <input type="text" placeholder='País:' className={Style.pais}/> <br/>
                    </div>  
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

        </main>
    )
}

export default Cadastro;