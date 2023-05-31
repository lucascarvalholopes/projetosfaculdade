import { Request, Response } from "express"
import RoomModel from "../../models/Room"

const getOneRoom = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await RoomModel.findOne({ _id: id })
    if (!user) {
        return res.status(400).json({ error: "Sala/Laboratório não encontrado na base de dados!" })
    }
    return res.send(user)
}

export default getOneRoom