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
import { FaMicroscope } from "react-icons/fa";
import '../../../styles/css/Apps.css';
import { useContext } from "react";
import ScreenContext from "../../../contexts/ScreenSize/ScreenContext";
import { useNavigate } from "react-router-dom";

/*
    Importa o ícone FaMicroscope da biblioteca react-icons, um arquivo CSS Apps.css
    e as dependências useContext e useNavigate do React. Também importa o componente
    ScreenContext do arquivo ScreenContext em um diretório de contexto chamado contexts/ScreenSize.
    O componente Apps usa o hook useNavigate para navegar para a página de gerenciamento de salas
    quando o botão é clicado. Ele usa o hook useContext para obter o tamanho atual da tela do contexto ScreenContext.
    Em seguida, ele renderiza um div que ocupa toda a altura da tela e uma seção que contém um botão.
    O botão é estilizado com classes CSS definidas no arquivo Apps.css. Quando clicado, o botão
    chama a função navigate com o argumento '/apps/room-manager', que é a rota para a página de gerenciamento
    de salas. O botão contém o ícone FaMicroscope e um texto indicando o nome do aplicativo.
    Em geral, este componente pode ser usado para listar e acessar diferentes aplicativos em uma página.
*/

const Apps = () => {
    const navigate = useNavigate();
    const screenSize = useContext(ScreenContext);
    
    return <div style={{height: screenSize.height - 60}}>
        <section>
            <h4>Apps</h4>
            <button type='button' className="button appButon" onClick={()=> navigate('/apps/room-manager')}>
                <FaMicroscope size={45} color='#fff' />
                <h6 style={{ margin: 0, color: '#fff', textAlign: 'start' }}>Gerenciador de Salas</h6>
            </button>
        </section>
    </div>
}
export default Apps;