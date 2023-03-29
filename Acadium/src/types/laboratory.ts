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
import { LaboratoryEquipmentType } from "./laboratoryEquipment"
import { LaboratoryFurnitureType } from "./laboratoryFurniture"

export type LaboratoryType = {
    id: string | number,
    name: string,
    location: string,
    capacity: number,
    equipment: LaboratoryEquipmentType[] | null,
    furniture: LaboratoryFurnitureType[] | null,
    rules: string
}