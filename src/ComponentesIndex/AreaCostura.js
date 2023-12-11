import Style from '../css/AreaCostura.module.css'
import costureiro from '../imagens/costureiro.svg'
import cliente from '../imagens/cliente.svg'
import linhas from '../imagens/linhashomes.svg'
import { Link } from "react-router-dom";

function AreaCostura() {
    return (
        <div className={Style.AreaCostura}>
            <div className={Style.Conteiner100}>
                <div className={Style.ConteinerMenor1}>
                    <button> <Link to='Cadastro' className={Style.linkao}>SOU COSTUREIRO </Link> </button>
                </div>
                <div className={Style.ConteinerMenor2}>
                    <button> <Link to='CadastroCli' className={Style.linkao}>BUSCAR COSTUREIRO  </Link></button> 
                </div>
            </div>
            <img src={linhas} className={Style.linhahome}/>

        </div>
    )
}
export default AreaCostura;