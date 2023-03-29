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
import ScreenContext, { ScreenContextType } from "./ScreenContext"

/*
  Serve como um provedor de contexto para o contexto ScreenContext.
  O componente recebe um children como propriedade, que representa o
  elemento filho que será renderizado dentro do provedor de contexto.
  Dentro do componente, há um estado screenSize, que é atualizado por
  meio da função setScreenSize do useState. Esse estado é inicializado
  com um objeto que contém as propriedades width e height definidas como 0.
  Em seguida, há um efeito colateral useEffect, que é executado apenas uma
  vez (graças à lista de dependências vazia []). O objetivo desse efeito é
  definir o tamanho inicial da tela e adicionar um listener ao evento
  resize da janela, de modo que o tamanho da tela seja atualizado sempre
  que a janela for redimensionada.
  Por fim, o componente ScreeenProvider retorna o provedor de contexto
  ScreenContext.Provider, que tem o valor screenSize como o valor do contexto.
  O children é renderizado dentro do provedor de contexto.
  No geral, esse código implementa um provedor de contexto que fornece
  informações sobre o tamanho da tela do usuário aos componentes filhos,
  permitindo que eles adaptem seu layout e comportamento de acordo com o tamanho da tela.
*/

const ScreeenProvider = ({children}:{children: JSX.Element}) => {
    const [screenSize, setScreenSize] = useState<ScreenContextType>({
      width: 0,
      height: 0
    });

    useEffect(() => {
        const updateScreenSize = () => {
          setScreenSize({
             width: window.innerWidth, 
             height: window.innerHeight
            });
        };
    
        // Adiciona um listener ao resize da janela para atualizar o tamanho da tela
        window.addEventListener('resize', updateScreenSize);
    
        // Chama a função para definir o tamanho inicial da tela
        updateScreenSize();
    
        // Remove o listener ao desmontar o componente
        return () => window.removeEventListener('resize', updateScreenSize);
      }, []);

    return <ScreenContext.Provider value={screenSize}>
    {children}
    </ScreenContext.Provider>
}

export default ScreeenProvider;