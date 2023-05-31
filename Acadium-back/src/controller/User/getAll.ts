import { Request, Response } from "express"
import UserModel from "../../models/User"

const getAll = async (req: Request, res: Response) => {
    const users = await UserModel.find().select('-password')
    return res.send(users)
}

export default getAll