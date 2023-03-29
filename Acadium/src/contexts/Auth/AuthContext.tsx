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
import { createContext } from "react";
import { User } from "../../types/user";

/*
    Utiliza o método createContext do React para criar um contexto de autenticação (AuthContext)
    que pode ser utilizado em toda a aplicação. O tipo AuthContextType define as propriedades que este
    contexto deve ter, incluindo o usuário atual (user), os métodos para efetuar login (signin) e logout (signout).
    O contexto é criado com o tipo AuthContextType e inicializado com um valor null!,
    que é uma indicação de que este valor será substituído posteriormente na execução do código.
*/

export type AuthContextType = {
    user: User | null,
    signin: (email: string, password: string) => Promise<boolean>,
    signout: () => void
} 

export const AuthContext = createContext<AuthContextType>(null!);