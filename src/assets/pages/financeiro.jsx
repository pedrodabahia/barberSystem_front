import './financeiro.css'
import financeiroIcon from '../images/financeiroIconRed.png'
import realIcon from '../images/realIcon.png'
import ButtonFinanceiro from '../containers/buttonFinanceiro'

function FinanceiroPage(){
    return(
        <>
            <div class="title">
                <img src={realIcon} />
                <h1>Financeiro</h1>
            </div>
            <div class="cards">
                <div class="cardService">
                    <img src={financeiroIcon}/>
                    <h1>R$1250,00</h1>
                    <h2>Receita do mês</h2>
                    </div>
                <h1>Historico de Cortes</h1>
                <ButtonFinanceiro />
            </div>
        </>
    )
}
export default FinanceiroPage;