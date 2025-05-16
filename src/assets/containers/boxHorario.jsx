import vendaIcon from '../images/vendaIcon.png'
import lixeiraIcon from '../images/lixeiraIcon.png'
import './boxHorario.css'

function Boxer({horario, servico, valor, cliente}){
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
                <div class="buttonOptions" id="concluidoBtn">
                    <img src={vendaIcon} />
                </div>
                <div class="buttonOptions" id="deleteBtn">
                    <img src={lixeiraIcon} />
                </div>
            </div>
        </>
    )
}
export default Boxer;
