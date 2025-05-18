import './servicos.css'
import cortesIcon from '../images/cortesIconRed.png'
import cadIcon from '../images/orcamentoIcon.png'
import ButtonService from '../containers/buttonService'

function Servicos(){
    return(
        <>  <div class="title">
                <img src={cortesIcon} />
                <h1>Serviços</h1>
            </div>
            <div class="cards">
                <div class="cadService"><img src={cadIcon}/></div>
                <ButtonService />
            </div>
        </>
    )
}
export default Servicos;