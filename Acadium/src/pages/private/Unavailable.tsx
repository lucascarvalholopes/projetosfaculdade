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
import ScreenContext from "../../contexts/ScreenSize/ScreenContext";
import {CgUnavailable} from 'react-icons/cg';
import { color_primary } from "../../styles/colors";
import { isMobile } from "react-device-detect";

/*
    Renderiza um ícone e uma mensagem indicando que a página está indisponível.
    Ele importa o hook useContext do React e o componente ScreenContext do arquivo
    ScreenContext em um diretório de contexto chamado contexts/ScreenSize. 
    Também importa o ícone CgUnavailable da biblioteca react-icons, a cor primária 
    definida em colors.ts e a constante isMobile da biblioteca react-device-detect.
    O componente Unavailable usa o hook useContext para obter o tamanho atual da 
    tela do contexto ScreenContext. Em seguida, ele renderiza um div que ocupa toda 
    a altura da tela, com o ícone CgUnavailable e uma mensagem indicando que a página
    está indisponível. O tamanho do ícone é definido com base na variável isMobile,
    que é verdadeira se a página estiver sendo exibida em um dispositivo móvel.
    Em geral, este componente pode ser usado para exibir uma mensagem de erro ou aviso
    quando a página está inacessível ou em manutenção.
*/

const Unavailable = () => {
    const screenSize = useContext(ScreenContext);

    return <div style={{height: screenSize.height - 60, display: 'flex', flexDirection: 'column', justifyContent: 'center' ,alignItems: 'center'}}>
        <CgUnavailable size={isMobile ? '10%' : '15%'} color={color_primary} />
        <h1 style={{ fontSize: 'x-large', color: color_primary, textAlign: 'center'}}>Página indisponível</h1>
    </div>
}

export default Unavailable;