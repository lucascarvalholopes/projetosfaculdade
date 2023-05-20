import { Request, Response } from "express";
import ReserveModel from "../../models/Reserve"

const createReserve = async (req: Request, res: Response) => {
    const {userId, roomId, initialDate, finalDate} = req.body;

    if(!userId || !roomId || !initialDate || !finalDate){
        return res.status(400).json({ error: "O usuário, sala, data inicial e data final são obrigatórios" })
    }

    try {
        const user = new ReserveModel({userId, roomId, initialDate, finalDate})
        user.save().then(reserve => {
            return res.status(200).json({ message: `Reserva ${reserve.id} cadastrado com sucesso!`, reserve })
        }).catch(error => {
            return res.status(400).json({ error: `Não foi possível cadastrar a reserva. Verifique os dados ou tente novamente mais tarde. Erro: ${error.message}, code: ${error.code}`})
        })
    } catch (error) {
        return res.status(500).json({ error: `Internal server error. Error: ${error}`})
    }
    
}

export default createReserve