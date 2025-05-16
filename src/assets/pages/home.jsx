import usuarioIcon from '../images/perfilIcon.png'
import agendaIcon from '../images/agendaIconRed.png'
import financeiroIcon from '../images/financeiroIconRed.png'
import horarioIcon from '../images/horarioIcon.png'
import BoxHorario from '../containers/boxHorario'
import './home.css'



function Home({usuario}){
    
    const receitaMensal = 12.437;
    const horariosDisponiveis = 5;
    const agendaHoje = 15;

    
    return(
        <>
        <div class="usuario">
            <div className="buttonNav" id="usuarioIcon"><img src={usuarioIcon}/></div>
            <h1>{usuario}</h1>
        </div>
        <div class="dashbord">
            <div class="box" id="financeiro">
                <img src={financeiroIcon}/>
                <h1>R${receitaMensal}</h1>
                <h2>Receita do Mês</h2>
            </div>
            <div class="box" id="horarios">
                <img src={horarioIcon} />
                <h1>{horariosDisponiveis}</h1>
                <h2>Horarios Disponíveis</h2>
            </div>
            <div class="box" id="agenda">
                <img src={agendaIcon} />
                <h1>{agendaHoje}</h1>
                <h2>Agendamentos de Hoje</h2>
            </div>            
        </div>
        <div class="agendaHoje">
            <h1 id='title'>Agendamentos de Hoje</h1>
            <BoxHorario valor={45} cliente={"Joilson de olivei."} horario={"08:00 - 08:30"} servico={"corte + platinado"}/>
            
        </div>
        </>
    )
}
export default Home;