import Style from '../css/AreaCostura.module.css'
import costureiro from '../imagens/costureiro.svg'
import cliente from '../imagens/cliente.svg'
import { Link } from "react-router-dom";
function AreaCostura() {
    return (
        <div className={Style.AreaCostura}>
            <div className={Style.Conteiner100}>
                <div className={Style.ConteinerMenor1}>
                    <button> <Link to='Cadastro' className={Style.linkao}>Sou costureiro </Link> </button>
                </div>
                <div className={Style.ConteinerMenor2}>
                    <button> <Link to='Cadastro' className={Style.linkao}>Buscar costureiro  </Link></button> 
                </div>
            </div>

        </div>
    )
}
export default AreaCostura;