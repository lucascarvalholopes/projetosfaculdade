import { Request, Response } from "express";
import RoomModel from "../../models/Room";

const createRoom = async (req: Request, res: Response) => {
    const {name, capacity, location} = req.body;

    if(!name || !capacity || !location){
        return res.status(400).json({ error: "O nome, a capacidade e a localização são obrigatórios" })
    }

    if (capacity <= 0) {
        return res.status(400).json({ error: "A capacidade não deve ser inferior a 0" })
    }

    try {
        const room = new RoomModel({name, capacity, location})
        room.save().then(room => {
            return res.status(200).json({ message: `Sala/Laboratório ${room.name} cadastrado com sucesso!`, room })
        }).catch(error => {
            return res.status(400).json({ error: `Não foi possível cadastrar a sala/laboratório. Verifique os dados ou tente novamente mais tarde. Erro: ${error.message}, code: ${error.code}`})
        })
    } catch (error) {
        return res.status(500).json({ error: `Internal server error. Error: ${error}`})
    }
    
}

export default createRoom