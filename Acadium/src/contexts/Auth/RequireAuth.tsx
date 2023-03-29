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
import React, { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

/*
    Esse trecho de código importa as bibliotecas necessárias para a criação do componente RequireAuth,
    que é responsável por verificar se o usuário está autenticado antes de renderizar determinadas
    rotas no aplicativo.
    O componente utiliza o useContext para acessar o contexto de autenticação fornecido pelo AuthContext,
    e o useNavigate do react-router-dom para redirecionar o usuário para a página de login caso não
    esteja autenticado.
    Além disso, há um useEffect que é executado apenas uma vez, no momento em que o componente é montado,
    e verifica se o usuário está autenticado. Se não, redireciona-o para a página de login.
    O componente é envolvido por um children, que é o conteúdo que será renderizado caso o
    usuário esteja autenticado.
*/

export const RequireAuth = ({children}: {children: React.ReactElement})=>{
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!auth.user){
            navigate('/login');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return children;
}