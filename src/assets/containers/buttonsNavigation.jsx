import './buttonsNavigation.css'
import agendaIcon from '../images/agendaIcon.png'
import financeiroIcon from '../images/financeiroIcon.png'
import orcamentoIcon from '../images/orcamentoIcon.png'
import cortesIcon from '../images/cortesIcon.png'
import perfilIcon from '../images/perfilIcon.png'

function buttonNavigation(){
    return(
        <div className="navigationBtn">
            <div className="buttonNav" id="agendaBtn"><img src={agendaIcon}/></div>
            <div className="buttonNav" id="financeiroBtn"><img src={financeiroIcon}/></div>
            <div className="buttonNav" id="orcamentoBtn"><img src={orcamentoIcon}/></div>
            <div className="buttonNav" id="cortesBtn"><img src={cortesIcon}/></div>
            <div className="buttonNav" id="perfilBtn"><img src={perfilIcon}/></div>
        </div>
    )
}
export default buttonNavigation;