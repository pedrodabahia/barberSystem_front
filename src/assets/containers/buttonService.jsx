import deleteIcon from '../images/lixeiraIcon.png';
import './buttonService.css'

function ButtonService({valor, servico}){
    return(

        <>
            <div class="buttonCorte">   
                <div class="titulos">
                    <h1>{servico != null ? servico : "Null"}</h1>
                    <h2>R${valor != null ? valor : "Null"}</h2>
                </div>
                <div class="deletar"><img src={deleteIcon} /></div>
            </div>
        </>

    )

}
export default ButtonService;