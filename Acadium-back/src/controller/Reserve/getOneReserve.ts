import { Request, Response } from "express"
import ReserveModel from "../../models/Reserve"

const getOneReserve = async (req: Request, res: Response) => {
    const { id } = req.params
    const reserve = await ReserveModel.findOne({ _id: id })
    if (!reserve) {
        return res.status(400).json({ error: "Reserva não encontrada na base de dados!" })
    }
    return res.send(reserve)
}

export default getOneReserve