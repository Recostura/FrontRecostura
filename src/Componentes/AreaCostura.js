import Style from '../css/AreaCostura.module.css'
import costureiro from '../imagens/costureiro.svg'
import cliente from '../imagens/cliente.svg'
function AreaCostura() {
    return (
        <div className={Style.AreaCostura}>
            <div className={Style.Conteiner100}>
                <div className={Style.ConteinerMenor1}>
                    <button>Sou <br></br> costureiro</button>
                </div>
                <div className={Style.ConteinerMenor2}>
                    <button>Buscar <br></br>costureiro</button>
                </div>
            </div>

        </div>
    )
}
export default AreaCostura;