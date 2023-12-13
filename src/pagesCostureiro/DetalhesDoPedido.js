import HeaderLogada from "../pages/HeaderLogada.js";
import Style from '../pagesCostureiro/css/DetalhesDoPedido.module.css'
import botao from '../imagens/cadastroButtons.svg';
import linhas from '../imagens/linhashomes.svg';
import { Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function DetalhesDoPedido(){
    return(
        <div className={Style.DetalhesPrincipal}>
            <HeaderLogada />
            <div className={Style.DetalhesDoServico}>
                <div className={Style.detalhes}>
                <img src={botao} alt="Botão" />
                <h1 className={Style.txtDetalhes}>Detalhes do Serviço</h1>
                <img src={botao} alt="Botão" />
                </div>
            </div>

            <section className={Style.InfoPedido}>
                <h2 className={Style.txtInfoCliente}>Informações do Cliente</h2>
                <div className={Style.infosCliente}>
                      <form className={Style.formInfoCliente}>
                       
                        <div className={Style.formGroup}>
                        <label className={Style.labelDetalheServico} htmlFor={Style.previsaoProntidao}>Previsão de Prontidão:</label>
                        <input type="text" id={Style.previsaoProntidao} name={Style.previsaoProntidao} className={Style.input} />
                        </div>
                       
                        <div className={Style.formGroup}>
                        <label className={Style.labelDetalheServico}  htmlFor={Style.valorReceber}>Valor a Receber:</label>
                        <input type="text" id={Style.valorReceber} name={Style.valorReceber} className={Style.input} />
                        </div>
                       
                        <div className={Style.formGroup}>
                        <label className={Style.labelDetalheServico}  htmlFor={Style.descricaoServico}>Serviço:</label>
                        <textarea id={Style.descricaoServico} name={Style.descricaoServico} className={Style.textarea}></textarea>
                        </div>
                    </form>
                </div>   
            </section>
                    <h2 className={Style.txtInfoCliente}>Imagens para referência: </h2>
                    <section className={Style.principalImagens}>
                    <div className={Style.imagemContainer}>
                        <div className={Style.imagemPlaceholder}>
                            <span className={Style.adicionarImagemIcon}>+</span>
                        </div>
                        </div>
                        <div className={Style.imagemContainer}>
                        <div className={Style.imagemPlaceholder}>
                            <span className={Style.adicionarImagemIcon}>+</span>
                        </div>
                        </div>
                        <div className={Style.imagemContainer}>
                        <div className={Style.imagemPlaceholder}>
                            <span className={Style.adicionarImagemIcon}>+</span>
                        </div>
                        </div>
            </section>
            <img src={linhas} className={Style.linhahome}/>
            
            <section className={Style.fimDetalhes}>
            <NavLink to='/CodigoSeguranca'>
                <button className={Style.btCosturar} type="submit">
                    BORA COSTURAR!
                </button>
            </NavLink>

           <NavLink to='/CostureiroServicos' > 
                <button className={Style.btCancelar} type="submit">
                    
                    cancelar costura
                
                </button>
           </NavLink>
            </section>

        </div>




    )
}

export default DetalhesDoPedido;