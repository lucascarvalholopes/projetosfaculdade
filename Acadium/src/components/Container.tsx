/*
    Curso de Engenharia de Software - UniEVANGÉLICA 
    Disciplina de Programação Web
    Projeto: Acadium 
    Devs:   Bruno Paiva - 2111579
            Gustavo Morais - 2111296
            João Pedro Braga Gomes- 2110157
            Luana Teixeira de Moraes - 2110867
            Lucas de Carvalho - 2110160
            Vanessa Nassar aji-2311987 
    26/03/2023 
*/
import { useContext, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import ScreenContext from '../contexts/ScreenSize/ScreenContext';
import { color_background } from '../styles/colors';
import Unavailable from '../pages/private/Unavailable';
import Apps from '../pages/private/Apps';
import { Menu } from './Menu';
import RoomManager from '../pages/private/Apps/RoomManager';
import NewRoom from '../pages/private/Apps/RoomManager/NewRoom';
import ReserveRoom from '../pages/private/Apps/RoomManager/Reserve';

/*
    O bloco de código abaixo mostra exporta o componente Conteiner,
    esse componente é responsável por estruturar o layout do sistema nas rotas privadas,
    mantendo o componente Menu acima do restante das telas.
    As telas são acessadas através das rotas definidas no endereço
    ./src/routes/index.tsx 
*/

const Container = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    // const {signout} = useContext(AuthContext);
    const { height } = useContext(ScreenContext);
    // const navigate = useNavigate();

    // const handleLogout = async () => {
    //     await signout();
    //     navigate('/')
    // }

    return <div>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        <section onClick={() => setShowMenu(false)} style={{ minHeight: height - 50, backgroundColor: color_background, padding: '10px 10px 0 10px' }}>
            <Routes>
                <Route path='/' element={<Unavailable />} />
                <Route path='/apps' element={<Outlet />}>
                    <Route path='/apps/' element={<Apps />} />
                    <Route path="/apps/room-manager" element={<Outlet />}>
                        <Route path='/apps/room-manager/' element={<RoomManager />} />
                        <Route path='/apps/room-manager/new' element={<NewRoom />} />
                        <Route path='/apps/room-manager/reserve' element={<ReserveRoom />} />
                    </Route>
                </Route>
            </Routes>
        </section>
    </div>
}

export default Container;