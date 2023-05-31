import { Request, Response } from "express"
import UserModel from "../../models/User"

const getOneUser =async (req: Request, res: Response) => {
    const {cpf} = req.params
    const user = await UserModel.findOne({cpf}).select('-password')
    if(!user){
        return res.status(400).json({ error: "Usuário não encontrado na base de dados!" })
    }
    return res.send(user)
}

export default getOneUser