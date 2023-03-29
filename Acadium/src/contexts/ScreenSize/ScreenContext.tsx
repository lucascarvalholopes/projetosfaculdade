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
import { createContext } from 'react';

/*
    É definido um tipo ScreenContextType, que possui as propriedades width e height, ambas do tipo number.
    Esse tipo é utilizado para indicar o formato de dados que o contexto deve ter.
    Depois, é criado o contexto ScreenContext utilizando a função createContext.
    É passado como argumento um objeto com os valores iniciais para as propriedades width e height.
    No entanto, esses valores iniciais são definidos como null!, o que significa que eles serão
    inicialmente nulos, mas o código será impedido de acessá-los antes de serem definidos.
*/

export type ScreenContextType = {
    width: number,
    height: number
}

const ScreenContext = createContext<ScreenContextType>({
    width: null!,
    height: null!
});

export default ScreenContext;