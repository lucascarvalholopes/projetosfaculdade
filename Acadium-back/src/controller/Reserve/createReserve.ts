import { Request, Response } from "express";
import ReserveModel from "../../models/Reserve";

const createReserve = async (req: Request, res: Response) => {
    const {id_user, id_room, initial_date, final_date} = req.body;

    if(!id_user || !id_room || !initial_date || !final_date){
        return res.status(400).json({ error: "A identificação do usuário, a identificação da sala/laboratório e as datas de inicio e fim da reserva são obrigatórias" })
    }

    if (final_date <= initial_date) {
        return res.status(400).json({ error: "A data final da reserva não pode ser inferior/igual a data inicial" })
    }

    try {
        const reserve = new ReserveModel({id_user, id_room, initial_date, final_date})
        reserve.save().then(reserve => {
            return res.status(200).json({ message: `Reserva ${reserve.id} cadastrado com sucesso!`, reserve })
        }).catch(error => {
            return res.status(400).json({ error: `Não foi possível cadastrar a reserva. Verifique os dados ou tente novamente mais tarde. Erro: ${error.message}, code: ${error.code}`})
        })
    } catch (error) {
        return res.status(500).json({ error: `Internal server error. Error: ${error}`})
    }
    
}

export default createReserve