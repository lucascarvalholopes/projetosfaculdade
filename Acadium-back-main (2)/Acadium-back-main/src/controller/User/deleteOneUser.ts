import { Request, Response } from "express"
import UserModel from "../../models/User"

const deleteOneUser = async (req: Request, res: Response) => {
    const { id } = req.params

    const user = await UserModel.findOne({_id : id})
    if(!user){
        return res.status(400).json({ error: "Usuário não encontrado na base de dados!" })
    }

    try {
        await UserModel.deleteOne({ _id: id })
        .then(() => {
            return res.status(200).json({ message: `Usuário ${id} deletado com sucesso!`})
        }).catch(error => {
            return res.status(400).json({ error: `Não foi possível deletar o usuário. Tente novamente mais tarde. Erro: ${error.message}, code: ${error.code}`})
        })
    } catch (error) {
        return res.status(500).json({ error: `Internal server error. Error: ${error}` })
    }
}

export default deleteOneUser