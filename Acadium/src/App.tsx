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
import { useEffect } from 'react';
import '../src/styles/css/App.css';
import Router from './routes';
import { LaboratoryDB, RervationsDB } from './database';

/*
  Esse código é uma definição do componente App, que é a raiz da aplicação. Ele importa o hook useEffect
  da biblioteca React, o arquivo de estilos CSS da aplicação, o componente Router definido em outro arquivo
  e duas bases de dados LaboratoryDB e RervationsDB.
  A função randomDate é uma função auxiliar que gera uma data aleatória entre duas datas passadas como
  parâmetros. A constante responsibles é um array com os nomes dos responsáveis pelas reservas.
  Dentro do hook useEffect, o array RervationsDB é inicializado com 25 reservas aleatórias. A função
  splice é utilizada para remover todos os elementos do array, e em seguida, um loop é executado 25 vezes
  para criar uma nova reserva para cada iteração. Cada reserva é um objeto com os campos id, responsible,
  laboratory, location, start_date e end_date. Os valores de responsible, laboratory e location são gerados
  aleatoriamente a partir das bases de dados LaboratoryDB e responsibles. As datas de start_date e end_date
  são geradas aleatoriamente pela função randomDate.
  O useEffect é executado apenas uma vez, pois o array de dependências é vazio. Por fim, o componente Router
  é renderizado dentro do retorno da função.
  Em resumo, esse código é uma definição do componente App que inicializa a base de dados RervationsDB com 25
  reservas aleatórias e rendereiza o componente Router que é responsável por definir as rotas da aplicação.
*/

const App = () => {

  function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  const responsibles = ['William', 'Eduardo', 'Henrique', 'Poliana', 'Walquíria'];

  useEffect(()=> {
    RervationsDB.splice(0, RervationsDB.length)
    for (let i = 0; i < 25; i++) {
      RervationsDB.push({
        id: i + 1,
        responsible: responsibles[Math.floor(Math.random() * responsibles.length)],
        laboratory: LaboratoryDB[Math.floor(Math.random() * LaboratoryDB.length)].name,
        location: LaboratoryDB[Math.floor(Math.random() * LaboratoryDB.length)].location,
        start_date: randomDate(new Date(), new Date()),
        end_date: randomDate(new Date(), new Date())
      });
    }
  },[])

  return <Router />
}

export default App;