import { Request, Response } from "express"
import ReserveModel from "../../models/Reserve"

const getAll = async (req: Request, res: Response) => {
    const reserves = await ReserveModel.find()
    return res.send(reserves)
}

export default getAll