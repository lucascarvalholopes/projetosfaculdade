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
import { ChangeEvent, useState } from "react";
import { LaboratoryDB } from "../../../../database";

/*
    A função ReserveRoom retorna um formulário que contém os campos de data e hora do início e fim da reserva,
    capacidade mínima exigida para a sala, e um dropdown com as opções de salas e laboratórios disponíveis
    para a reserva, com base na capacidade mínima exigida.
    O estado mínimo de capacidade é gerenciado pelo hook useState e é atualizado sempre que o usuário altera
    o valor do campo de entrada. A função handleInputMinimumCapacityChange é responsável por atualizar o
    estado de acordo com o valor do campo de entrada.
    O dropdown é criado a partir da lista de salas e laboratórios do banco de dados, filtrando apenas as opções
    que atendem à capacidade mínima exigida.
*/

const ReserveRoom = () => {
    const [minimumCapacity, setMinimumCapacity] = useState('0');

    const handleInputMinimumCapacityChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setMinimumCapacity(inputValue);
    };
    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form style={{ width: '45%' }}>
            <div>
                <label htmlFor="inputStartBooking" className="form-label">Data e Hora do início da reserva</label>
                <input id='inputStartBooking' type='datetime-local' min={new Date().toISOString().slice(0, 16)} required />
            </div>
            <div>
                <label htmlFor="inputEndBooking" className="form-label">Data e Hora do fim da reserva</label>
                <input id='inputEndBooking' type='datetime-local' min={new Date().toISOString().slice(0, 16)} required />
            </div>
            <div>
                <label htmlFor="inputCapacity" className="form-label">Capacidade da Sala/Laboratório</label>
                <input id='inputCapacity' type='number' value={minimumCapacity} onChange={handleInputMinimumCapacityChange} />
            </div>
            <div>
                <label htmlFor="selectLaboratory" className="form-label">Sala/Laboratório</label>
                <select id="selectLaboratory" className="form-select" aria-label="Default select example">
                    <option value='default'>Selecione uma opção</option>
                    {LaboratoryDB.map(lab => lab.capacity >= Number(minimumCapacity) ? <option value={lab.id} key={lab.id}>{lab.name} - {lab.location} - {lab.capacity} pessoas</option> : null)}
                </select>
            </div>
            <button type="submit" className="btn button">Agendar</button>
        </form>
    </div>
}

export default ReserveRoom;