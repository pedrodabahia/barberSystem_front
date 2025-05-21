import checkIcon from '../images/checkIcon.png'
import './buttonFinanceiro.css'


function Financeiro({horario,servico,valor,cliente,vendaIcon,lixeiraIcon}){
    return(
        <>
            <div class="boxHorario"> 
                <div class="text">
                    <h1>{horario}</h1>
                    <div class="subtitulo">
                        <h2>{servico}</h2>
                        <h2>R${valor}</h2>
                    </div>
                    <h1>{cliente}</h1>
                </div>
                <div class="iconOptions" id="concluidoIcon">
                    <img src={checkIcon} />
                </div>
            </div>
        </>
    )
}
export default Financeiro;