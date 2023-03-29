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
import { useContext } from "react";
import { isMobile } from "react-device-detect";
import ScreenContext from "../contexts/ScreenSize/ScreenContext";
import { color_background } from "../styles/colors";
import logo from '../assets/logo.svg';

/* 
    O bloco de código abaixo mostra exporta o componente Layout,
    esse componente é responsável por estruturar o layout do sistema nas rotas públicas.
*/

const Layout = ({children}:{children: JSX.Element}) => {
    const screenSize = useContext(ScreenContext);
    const pkg = require('../../package.json');

    return <div style={{ 
        height: screenSize.height, 
        width: screenSize.width,
        backgroundColor: color_background,
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        gap: 20
    }}>
        <img width={isMobile ? '70%' : '20%'} src={logo} alt="Acadium Logo" />
        {children}
        <div>
            <p style={{color: 'gray', fontSize: 'small'}}>versão: {pkg.version}</p>
        </div>
    </div>
}

export default Layout;