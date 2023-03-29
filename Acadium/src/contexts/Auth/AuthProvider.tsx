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
import React, { useEffect, useState } from "react";
import { User } from "../../types/user"
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";

/*
    Responsável por criar um contexto de autenticação e fornecer um provedor
    que encapsula todos os componentes que precisam de acesso às informações de autenticação.
    O componente AuthProvider utiliza os hooks useState e useEffect para gerenciar o estado
    do usuário autenticado e realizar a validação do token armazenado no localStorage.
    O hook useApi é utilizado para acessar as funções de autenticação fornecidas por uma API externa.
    Além disso, a função signin é responsável por fazer uma requisição ao backend para autenticar
    o usuário e armazenar o token de autenticação no localStorage. A função signout é responsável
    por remover o token de autenticação do localStorage e definir o usuário autenticado como null.
    Por fim, o componente AuthProvider retorna o AuthContext.Provider com o valor das informações
    de autenticação, que é repassado para todos os componentes filhos encapsulados.
*/

export const AuthProvider = ({children}:{children: JSX.Element}) => {

    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(()=>{
        const validateToken = async () =>{
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.validateToken(storageData);
                if(data.user){
                    setUser(data.user)
                }
            }
        };
        validateToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const signin = async (email: string, password: string) => {
        //requisição ao Back end
        const data = await api.signin(email, password);
        if(data.user && data.token){
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signout = async () => {
        await api.signout();
        setUser(null);
        setToken('');
    }

    const setToken = (token: string) =>{
        localStorage.setItem('authToken', token);
    }

    return <AuthContext.Provider value={{user, signin, signout}}>
        {children}
    </AuthContext.Provider>
}