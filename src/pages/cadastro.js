import Style from './css/cadastro.module.css'
import Button from '../imagens/cadastroButtons.svg'

function Cadastro() {
    return(
        <main className={Style.pageCadastro}>

            <div className={Style.buttonsAndFrase}>
                <img src={Button} alt='botões' />
                <p>Olá, Costureiro(a)! <br /> Crie sua conta:</p>
                <img src={Button} alt='botões' />
            </div>

            <section className={Style.forms1}>
                <form className={Style.nomeSenha}>
                    <label>Crie deu cadastro:</label> <br/>
                    <input type="text" placeholder='E-mail:' /> <br/>

                    <label>Senha</label> <br/>
                    <input type="text" placeholder='Senha:'/>

                    <label>Confirme sua senha</label> <br/>
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

                    <label>Data de Nascimento</label> <br/>
                    <div className={Style.date}>
                    <input type="text" placeholder='Dia'/> <br/>
                    <input type="text" placeholder='Mês'/> <br/>

                    <datalist id="browsers"/>
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

                    <input type="text" placeholder='Dia:'/> <br/>
                    </div>
                </form>
            </section>

        </main>
    )
}

export default Cadastro;