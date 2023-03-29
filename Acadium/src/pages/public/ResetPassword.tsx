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
import '../../styles/css/ContainerLayout.css';
import restoreKey from '../../assets/restore_key.svg';
import Layout from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { isBrowser, isMobile } from 'react-device-detect';
import { color_primary, color_secundary } from '../../styles/colors';
import { useState } from 'react';

/*
    O código é um componente chamado ResetPassword que exporta um formulário de redefinição de senha.
    Ele importa um arquivo CSS de estilo, uma imagem SVG, um componente Layout e algumas funções do React.
    Em seguida, define um estado inicial para cpf com useState e uma função handleSubmit que é chamada quando
    o formulário é enviado.
    O componente Layout é utilizado para organizar o conteúdo, o que é feito em uma seção que contém a imagem
    da logo, um título, um parágrafo informativo e o formulário de redefinição de senha em si. O formulário
    contém um campo de texto para o cpf, que é validado e atualizado com a função setCpf quando o usuário digita.
    Além disso, há um botão de enviar e um botão de voltar, que redireciona para a página de login.
    O código também utiliza algumas constantes de cores para estilização. A largura e altura da seção são
    definidas com base no dispositivo do usuário usando isMobile e isBrowser, e o tamanho da imagem é ajustado
    de acordo.
*/

const ResetPassword = () => {
    const navigate = useNavigate();

    const [cpf, setCpf] = useState<string>('');

    const handleSubmit = async () => {
        // if (cpf && password) {
        //     if (cpf.length === 11) {
        //         const isLogged = await signin(cpf, password);
        //         if (isLogged) {         
        //             navigate('/');
        //         } else {
        //             alert('Não deu certo')
        //         }
        //     } else {
        //         toast.error('CPF inválido', {
        //             position: "top-right",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             style: { fontSize: 'small' },
        //             progress: undefined,
        //             theme: "light",
        //         });
        //     }
        // } else {
        //     toast.warn('Ambos os campos são de preenchimento obrigatório ', {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         style: { fontSize: 'small' },
        //         progress: undefined,
        //         theme: "light",
        //     });
        // }
    }

    return <Layout>
        <section style={{
            width: isMobile ? '80%' : '30%',
            height: isMobile ? '65%' : '90%',
        }} className="containerLayout">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <img src={restoreKey} alt="Acadium Logo" style={{ width: isMobile ? '50%' : '50%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                <h1 style={{ color: color_primary, fontSize: 'x-large' }}>Redefinir senha</h1>
                <p style={{ color: color_secundary, fontSize: 'smaller', textAlign: 'center' }}>Será aberto um chamado de redefinição de senha com o setor responsável!</p>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div>
                    <label htmlFor="InputCpf" className="form-label">CPF</label>
                    {isBrowser && <input type="text" className="form-control" id="InputCpf" maxLength={11} value={cpf} onChange={e => setCpf(e.target.value.replace(/\D/g, ''))} placeholder='Informe seu cpf' required/>}
                    {isMobile && <input type="number" className="form-control" id="InputCpf" maxLength={11} value={cpf} onChange={e => setCpf(e.target.value.replace(/\D/g, ''))} placeholder='Informe seu cpf' required />}
                </div>
                <input type='submit' className="btn button" />
            </form>
            <button type="button" className="btn btn-link" style={{
                    color: 'gray',
                    textDecoration: 'none',
                    fontSize: 'small',
                    textAlign: 'center'
                }} onClick={() => navigate('/login')}>Voltar</button>
        </section>
    </Layout>
}

export default ResetPassword;

// eslint-disable-next-line no-lone-blocks
{/* <section style={{ height: '65%', width: '25%' }} className="containerLayout">
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <img src={restoreKey} alt="Acadium Logo" style={{ width: '50%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                <h1 style={{color: color_primary, fontSize: 'x-large'}}>Redefinir senha</h1>
                <p style={{color: color_secundary, fontSize: 'smaller', textAlign: 'center'}}>Informe seu cpf, será aberto um chamado para redefinição da senha com o setor responsável. As instruções serão enviadas para o e-mail cadastrado.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '95%', display: 'flex', flexDirection: 'column', gap: 10}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                        <label htmlFor="cpfInput" style={{fontSize: 'small'}}>CPF</label>
                        <input id="cpfInput" name="cpfInput" type='text' placeholder="Insira seu cpf" required
                        maxLength={11}
                        value={cpf}
                        onChange={(e)=> setCPF(e.target.value.replace(/\D/g,''))} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                        <button className='button'>Redefinir</button>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Link to="/" style={{color: 'gray', textDecoration: 'none', fontSize: 'small'}}>Voltar</Link>
            </div>
        </section> */}