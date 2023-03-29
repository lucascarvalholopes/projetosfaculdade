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
import { LaboratoryEquipmentDB, LaboratoryFurnitureDB } from "../../../../database"

/*
    Renderiza um formulário para criar uma nova sala de laboratório. O formulário possui campos
    de entrada para nome, localização, capacidade e regras/políticas, bem como caixas de seleção
    para equipamentos e móveis.
    O componente usa duas variáveis de um módulo de banco de dados, LaboratoryEquipmentDB e
    LaboratoryFurnitureDB, para renderizar as caixas de seleção de equipamentos e móveis. Caso não haja
    itens em nenhuma dessas variáveis, uma mensagem é exibida para informar ao usuário que não há
    equipamentos ou móveis disponíveis para escolha.
    No momento não possui o submit devido a ausencia do back end
*/

const NewRoom = () => {
    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <form style={{width: '45%'}}>
            <div>
                <label htmlFor="inputName" className="form-label">Nome</label>
                <input className="form-control" id="inputName" required/>
            </div>
            <div>
                <label htmlFor="inputLocation" className="form-label">Localização</label>
                <input className="form-control" id="inputLocation" required/>
            </div>
            <div>
                <label htmlFor="inputCapacity" className="form-label">Capacidade</label>
                <input type='number' className="form-control" id="inputCapacity" min={0} required/>
            </div>
            <div>
                <label className="form-label">Equipamentos</label>
                {LaboratoryEquipmentDB.length === 0 ?
                    <label className="form-text"> 
                        Nenhuma equipamento cadastrado
                    </label>
                    :
                    LaboratoryEquipmentDB.map(equipment => <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id={`checkEquipament_${equipment.id}`} />
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                            <label className="form-check-label" htmlFor={`checkEquipament_${equipment.id}`}>
                                {equipment.name}
                            </label>
                            <label style={{fontSize: 12, fontWeight: 300}} htmlFor={`checkEquipament_${equipment.id}`}>
                                ( {equipment.description !== null ? equipment.description : 'Sem descrição'} )
                            </label>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <label className="form-label">Mobiliário</label>
                {LaboratoryFurnitureDB.length === 0 ?
                    <label className="form-text">
                        Nenhuma mobília cadastrada
                    </label>
                    :
                    LaboratoryFurnitureDB.map(furniture => <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id={`checkFurniture_${furniture.id}`} />
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                            <label className="form-check-label" htmlFor={`checkFurniture_${furniture.id}`}>
                                {furniture.name}
                            </label>
                            <label style={{fontSize: 12, fontWeight: 300}} htmlFor={`checkFurniture_${furniture.id}`}>
                                ( {furniture.description !== null ? furniture.description : 'Sem descrição'} )
                            </label>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <label htmlFor="rulesPolicy" className="form-label">Regras e políticas</label>
                <textarea className="form-control" rows={5} id='rulesPolicy'/>
            </div>
            <button type="submit" className="btn button">Cadastrar</button>
        </form>
    </div>
}

export default NewRoom