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
import Layout from "../../components/Layout";
import ErroNotFound from '../../assets/not_found.svg';
import { color_primary } from "../../styles/colors";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

/*
    O componente importa Layout de um arquivo de componente, ErroNotFound de um arquivo de imagem, 
    color_primary de um arquivo de estilo, isMobile de react-device-detect e useNavigate de react-router-dom.
    O componente então retorna um componente Layout que contém um elemento de seção com um 
    estilo dinâmico que varia conforme o tamanho da tela é considerado móvel ou não. Dentro desta seção,
    há um elemento div que exibe a imagem ErroNotFound com um estilo dinâmico que ajusta sua largura com
    base no tamanho da tela ser considerado móvel ou não.
*/

const NotFound = () => {
    const navigate = useNavigate();

    return <Layout>
        <section style={{
            width: isMobile ? '80%' : '30%',
            height: isMobile ? '65%' : '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5
        }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <img src={ErroNotFound} alt="Error 404: Not Found" style={{ width: isMobile ? '80%' : '90%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{ fontSize: 'x-large', color: color_primary, textAlign: 'center'}}>Página não encontrada!</h1>
                <p style={{ fontSize: 'small' , fontWeight: 300, color: color_primary, textAlign: 'center' }}>Desculpe, a página que você está procurando não existe</p>
                <p style={{ fontSize: 'small' , fontWeight: 300, color: 'gray', textAlign: 'center' }}>Erro: 404 - Not Found</p>
            </div>
            <button type="button" className="btn button" style={{width: '50%'}} onClick={() => navigate('/')}>Voltar</button>
        </section>
    </Layout>
}

export default NotFound;

// eslint-disable-next-line no-lone-blocks
{/* <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <img src={Image} alt="Error 404: Not Found" style={{ width: '50%' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                <h1 style={{
                    fontSize: 'xxx-large',
                    color: color_primary
                }}>404</h1>
                <h2 style={{
                    fontSize: 'x-large',
                    color: color_primary
                }}>Página não encontrada!</h2>
                <p style={{
                    fontWeight: 300,
                    color: color_primary
                }}>Desculpe, a página que você está procurando não existe</p>
            </div>
            <Link to='/' className="button">Voltar ao início</Link>
        </section> */}