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

// import axios from "axios";

// const api = axios.create({
//     baseURL: process.env.REACT_APP_API
// })


/*
    define um hook personalizado chamado useApi, que retorna um objeto com três funções
    assíncronas: validateToken, signin e signout.
    A função validateToken recebe um token como parâmetro e retorna um objeto que simula
    uma resposta da API contendo informações de usuário, como id, name e email.
    implementação real dessa função está comentada, mas envolveria uma chamada assíncrona à API usando o axios.
    A função signin recebe um e-mail e uma senha como parâmetros e retorna um objeto que 
    simula uma resposta da API contendo informações de usuário e um token de autenticação.
    A implementação real dessa função também está comentada, mas envolveria uma chamada
    assíncrona à API usando o axios.
    A função signout não recebe parâmetros e retorna um objeto que simula uma resposta da
    API indicando que o usuário foi deslogado com sucesso. A implementação real dessa função
    também está comentada, mas envolveria uma chamada assíncrona à API usando o axios.
*/

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {id: 1,name: 'Gustavo Morais',email: 'gustavomorais47.gm@gmail.com'}
        }
        // const response = await api.post('/validate', { token });
        // return response.data
    },
    signin: async (email: string, password: string) => {
        return {
            user: {id: 1,name: 'Gustavo Morais',email: 'gustavomorais47.gm@gmail.com'},
            token: 'sdbjaklsdmaksbdhabsasdahsddmasdh'
        }
        // const response = await api.post('/signin', { email, password });
        // return response.data
    },
    signout: async () => {
        return { status: true}
        // const response = await api.post('/signout');
        // return response.data
    }
})