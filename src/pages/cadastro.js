
import Header from '../ComponentesIndex/Header';
import Style from './css/cadastro.module.css'
import Button from '../imagens/cadastroButtons.svg'
import { Link } from 'react-router-dom';

function Cadastro() {
    return(
        <main className={Style.pageCadastro}>
            <Header />

            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p>Olá, Costureiro(a)! <br /> Crie sua conta:</p>
                <img src={Button} alt='botões' Link to='AreaPedidos' />
            </div>

            <section className={Style.forms1}>
                <form className={Style.nomeSenha}>
                    <label>Crie seu cadastro:</label> <br/>
                    <input type="text" placeholder='E-mail:' /> <br/>

                    <label>Senha:</label> <br/>
                    <input type="text" placeholder='Senha:'/>

                    <label>Confirme sua senha:</label> <br/>
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

            {/*<section className={Style.date}>
                <label>Data de Nascimento</label> <br/>

                <div className={Style.date}>
                    <input type="text" placeholder='Dia'/> <br/>
                    <datalist placeholder='Mês'/>
                        <option value="Janeiro"/>
                        <option value="Fevereiro"/>
                        <option value="Março"/>
                        <option value="Abril"/>
                        <option value="Maio"/>
                        <option value="Junho"/>
                        <option value="Julho"/>
                        <option value="Agosto"/>
                        <option value="Setembro"/>
                        <option value="Outubro"/>
                        <option value="Novembro"/>
                        <option value="Dezembro"/>
                    <datalist/>
                    <input type="text" placeholder='Mês'/> <br/>
                </div>

    </section>*/}

            <section className={Style.forms3}>
                <p>Localizaçao</p>
                <forms className={Style.localizacao}>
                    <input type="text" placeholder='CPE:'/> <br/>
                    <input type="text" placeholder='Endereço:'/> <br/ >

                    <div className={Style.nBairro}>
                        <input type="text" placeholder='Nº:'/> <br/>
                        <input type="text" placeholder='Bairro:'/> <br/>
                    </div>
                    <div className={Style.estadoP}>
                        <input type="text" placeholder='Estado:'/> <br/>
                        <input type="text" placeholder='País:'/> <br/>
                    </div>  
                </forms>    
            </section>

        </main>
    )
}

export default Cadastro;