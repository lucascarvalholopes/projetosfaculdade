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
import { LaboratoryType } from "../types/laboratory";
import { LaboratoryEquipmentType } from "../types/laboratoryEquipment";
import { LaboratoryFurnitureType } from "../types/laboratoryFurniture";
import { Reservation } from "../types/reservation";

//Simula um banco de dados estático

export const RervationsDB: Reservation[] = [];
export const LaboratoryDB: LaboratoryType[] = [
    {
        id:0,
        name: 'Lab 1',
        location: 'Bloco A',
        capacity: 10,
        equipment: [
            {
                id: 0,
                name: 'Computador',
                description: null
            }
        ],
        furniture: null,
        rules: ''
    },
    {
        id:1,
        name: 'Lab 2',
        location: 'Bloco B',
        capacity: 25,
        equipment: [
            {
                id: 1,
                name: 'Projetor',
                description: 'Lorem ipsum dolor sit amet. Et doloremque tenetur sed odio tempore aut totam iste qui delectus error.'
            }
        ],
        furniture: null,
        rules: ''
    },
    {
        id:2,
        name: 'Lab 3',
        location: 'Bloco C',
        capacity: 80,
        equipment: [
            {
                id: 0,
                name: 'Computador',
                description: null
            },
            {
                id: 1,
                name: 'Projetor',
                description: 'Lorem ipsum dolor sit amet. Et doloremque tenetur sed odio tempore aut totam iste qui delectus error.'
            }
        ],
        furniture: null,
        rules: ''
    },
    {
        id:3,
        name: 'Sala 1',
        location: 'Bloco D',
        capacity: 110,
        equipment: null,
        furniture: null,
        rules: ''
    },
    {
        id:4,
        name: 'Sala 2',
        location: 'Bloco E',
        capacity: 45,
        equipment: null,
        furniture: null,
        rules: ''
    },
    {
        id:5,
        name: 'Sala 3',
        location: 'Bloco F',
        capacity: 55,
        equipment: null,
        furniture: null,
        rules: ''
    }
];
export const LaboratoryEquipmentDB: LaboratoryEquipmentType[] = [
    {
        id: 0,
        name: 'Computador',
        description: null
    },
    {
        id: 1,
        name: 'Projetor',
        description: 'Lorem ipsum dolor sit amet. Et doloremque tenetur sed odio tempore aut totam iste qui delectus error.'
    }
];
export const LaboratoryFurnitureDB: LaboratoryFurnitureType[] = [];