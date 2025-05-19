import './financeiro.css'
import financeiroIcon from '../images/financeiroIconRed.png'
import ButtonFinanceiro from '../containers/buttonFinanceiro'

function FinanceiroPage(){
    return(
        <>
            <div class="title">
                <img src={financeiroIcon} />
                <h1>Financeiro</h1>
            </div>
            <div class="cards">
                <div class="cadService"><img src={financeiroIcon}/></div>
                <h1>Historico de Cortes</h1>
                <ButtonFinanceiro />
            </div>
        </>
    )
}
export default FinanceiroPage;