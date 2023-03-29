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
import { useContext, useState } from "react";
import Layout from "../../components/Layout";
import '../../styles/css/ContainerLayout.css';
import { color_primary, color_secundary } from "../../styles/colors";
import { isBrowser, isMobile } from "react-device-detect";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { toast } from "react-toastify";

/*
    O componente é responsável por renderizar um formulário de login, com campos de CPF e
    senha e um botão de submit, que dispara uma função handleSubmit ao ser clicado.
    A função handleSubmit verifica se o CPF informado é válido e chama a função signin
    que está sendo passada através do useContext para realizar a autenticação. Se a
    autenticação for bem-sucedida, o usuário é redirecionado para a página principal da
    aplicação, caso contrário é exibido um alerta informando que o login falhou.
    O componente utiliza o Layout como um componente externo para organizar o layout da
    página, e também utiliza algumas constantes para cores e estilos. O tamanho e altura
    do formulário são definidos com base no dispositivo em que o aplicativo está sendo
    executado, por meio das variáveis isMobile e isBrowser provenientes da biblioteca
    react-device-detect. O componente também utiliza um link para a página de redefinição de senha.
*/

const Login = () => {
    const { signin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [cpf, setCpf] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (cpf.length === 11) {
            const isLogged = await signin(cpf, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert('Não deu certo')
            }
        } else {
            toast.error('CPF inválido', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: { fontSize: 'small' },
                progress: undefined,
                theme: "light",
            });
        }
    }

    return <Layout>
        <section style={{
            width: isMobile ? '80%' : '30%',
            height: isMobile ? '65%' : '90%'
        }} className="containerLayout">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ color: color_primary, fontSize: 'x-large' }}>Login</h1>
                <p style={{ color: color_secundary, fontSize: 'smaller', textAlign: 'center' }}>Insira as informações abaixo para entrar na plataforma!</p>
            </div>
            <div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div>
                        <label htmlFor="InputCpf" className="form-label">CPF</label>
                        {isBrowser && <input type="text" className="form-control" id="InputCpf" maxLength={11} value={cpf} onChange={e => setCpf(e.target.value.replace(/\D/g, ''))} placeholder='Informe seu cpf' required />}
                        {isMobile && <input type="number" className="form-control" id="InputCpf" maxLength={11} value={cpf} onChange={e => setCpf(e.target.value.replace(/\D/g, ''))} placeholder='Informe seu cpf' required />}
                    </div>
                    <div>
                        <label htmlFor="InputPassword" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="InputPassword" value={password} onChange={e => setPassword(e.target.value)} placeholder='Informe sua senha' required />
                    </div>
                    <input type='submit' className="btn button" />
                    <p style={{ textAlign: 'center', fontSize: 'small' }}>Esqueceu a senha? <Link to='/reset-password'>Redefinir senha</Link></p>
                </form>
            </div>
        </section>
    </Layout>
}

export default Login;