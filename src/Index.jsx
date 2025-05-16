import { Routes, Route} from 'react-router-dom'
import Nav from './assets/containers/buttonsNavigation'
import Home from './assets/pages/home'
import Servicos from './assets/pages/servicos'

function Index(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home usuario={"Pedro's Barbershop"} /> } />
                <Route path="/servico" element={  <Servicos />  } />
                <Route path="/agenda" element={ <h1>Agenda</h1>} />
                <Route path="/perfil" element={ <h1>Perfil</h1>} />
            </Routes>
            <Nav></Nav>
        </>
    )
}
export default Index;