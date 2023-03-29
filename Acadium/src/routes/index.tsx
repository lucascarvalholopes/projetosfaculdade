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
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../pages/public/Login";
import ResetPassword from "../pages/public/ResetPassword";
import NotFound from "../pages/public/NotFound";
import { RequireAuth } from "../contexts/Auth/RequireAuth";
import Container from "../components/Container";

/*
    Esse código é uma definição de rotas para uma aplicação web usando a biblioteca React e o pacote
    react-router-dom para gerenciar a navegação entre as páginas.
    A função Router define as rotas disponíveis na aplicação, que estão agrupadas dentro de um elemento
    Routes. Há quatro rotas definidas: "/login", "/reset-password", "*", e "/".
    As rotas "/login" e "/reset-password" são páginas públicas, que não exigem autenticação do usuário
    para acessá-las. A rota "*" é uma rota genérica que será utilizada para qualquer outra rota não definida,
    e a rota "/" é a raiz da aplicação, que requer autenticação do usuário para acessar.
    Dentro da rota "/", temos outras rotas que requerem autenticação. A primeira é a rota "/", que mostra o
    componente Container. Dentro dessa rota, também temos a rota "/apps", que mostra um grupo de aplicativos.
    Dentro da rota "/apps", temos outras rotas que mostram diferentes páginas do aplicativo "room-manager".
    Essas páginas são "/apps/room-manager/", "/apps/room-manager/new" e "/apps/room-manager/reserve". Todas
    essas rotas exigem autenticação do usuário para serem acessadas.
    O componente RequireAuth é utilizado para garantir que apenas usuários autenticados possam acessar as
    rotas que exigem autenticação. O componente Outlet é usado para renderizar o conteúdo dentro de um elemento
    pai, neste caso, dentro do componente Container.
    No geral, esse código é uma definição de rotas para uma aplicação React que tem uma página de login, uma
    página para redefinir a senha, uma página para exibir erros 404 e uma página principal que exige autenticação
    do usuário. Além disso, tem um grupo de aplicativos, que inclui o aplicativo "room-manager" com suas próprias
    rotas e páginas.
*/

const Router = () => {
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<RequireAuth><Container /></RequireAuth>}>
            <Route path='/' element={<Outlet />} />
            <Route path='/apps' element={<Outlet />}>
                <Route path='/apps/' element={<Outlet />} />
                <Route path="/apps/room-manager" element={<Outlet />}>
                    <Route path='/apps/room-manager/' element={<Outlet />} />
                    <Route path='/apps/room-manager/new' element={<Outlet />} />
                    <Route path='/apps/room-manager/reserve' element={<Outlet />} />
                </Route>
            </Route>
        </Route>
    </Routes>
}

export default Router;