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

import { IoAddCircle } from "react-icons/io5";
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { RervationsDB } from "../../../../database";
import { ChangeEvent, useEffect, useState } from "react";

/*
    Utiliza várias bibliotecas do React, como react-icons, react-router-dom e useState e useEffect hooks.
    Ele exibe dois botões para cadastrar uma nova sala/laboratório e realizar um agendamento e uma
    tabela que lista as reservas de salas/laboratórios. O usuário pode pesquisar por ID ou responsável
    para filtrar as reservas.
    O componente usa uma variável de estado 'search' para armazenar o valor de entrada do usuário para
    pesquisa e, em seguida, usa um useEffect hook para filtrar as reservas com base na pesquisa do usuário.
    A função handleInputSearchChange é chamada sempre que o valor da entrada do usuário muda e atualiza o
    valor da variável 'search'.
    O componente também usa a função useNavigate do react-router-dom para navegar para outras páginas da
    aplicação quando o usuário clica em um dos botões de ação.
    O componente usa a tabela HTML para exibir as reservas. Se houver reservas correspondentes, ele mapeia
    a matriz de reservas filtradas e renderiza uma linha de tabela para cada reserva. Se não houver reservas
    correspondentes, ele renderiza uma linha de tabela indicando que não foram encontradas reservas.
*/

const RoomManager = () => {
    const navigate = useNavigate();
    const [reservations, setReservations] = useState(RervationsDB);
    const [search, setSearch] = useState('');

    const handleInputSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setSearch(inputValue);
    };

    useEffect(() => setReservations(search === '' ? RervationsDB : !isNaN(Number(search)) ? RervationsDB.filter(res => res.id === Number(search)) : RervationsDB.filter(res => res.responsible.includes(search))), [search])

    return <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <label className="title">Gerenciador de Salas</label>
        <section style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            <button type='button' className="button appButon" onClick={() => navigate('/apps/room-manager/new')}>
                <IoAddCircle size={45} color='#fff' />
                <h6 style={{ margin: 0, color: '#fff', textAlign: 'start' }}>Cadastrar Sala/Laboratório</h6>
            </button>
            <button type='button' className="button appButon" onClick={() => navigate('/apps/room-manager/reserve')}>
                <BsFillCalendarCheckFill size={45} color='#fff' />
                <h6 style={{ margin: 0, color: '#fff', textAlign: 'start' }}>Realizar agendamento</h6>
            </button>
        </section>
        <label className="title">Agendamentos do dia</label>
        <section>
            <div>
                <label>Pesquisar</label>
                <input type='text' className="form-control" placeholder="Id ou responsável" value={search} onChange={handleInputSearchChange} />
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Reserva</th>
                        <th>Responsável</th>
                        <th>Sala/Laboratório</th>
                        <th>Localização</th>
                        <th>Início</th>
                        <th>Termino</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reservations.length !== 0 ?
                            reservations.map(res => <tr>
                                <td>{res.id}</td>
                                <td>{res.responsible}</td>
                                <td>{res.laboratory}</td>
                                <td>{res.location}</td>
                                <td>{res.start_date.toLocaleString()}</td>
                                <td>{res.end_date.toLocaleString()}</td>
                            </tr>)
                            :
                            <tr>
                                <td colSpan={6}>Nenhuma reserva encontrada</td>
                            </tr>
                    }
                </tbody>
            </table>
        </section>
    </div>
}

export default RoomManager;