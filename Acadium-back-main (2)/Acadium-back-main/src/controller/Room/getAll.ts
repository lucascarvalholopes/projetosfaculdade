import { Request, Response } from "express"
import RoomModel from "../../models/Room"

const getAll = async (req: Request, res: Response) => {
    const users = await RoomModel.find()
    return res.send(users)
}

export default getAll