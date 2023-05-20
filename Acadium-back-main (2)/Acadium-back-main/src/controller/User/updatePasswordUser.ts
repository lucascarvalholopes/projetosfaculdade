import { Request, Response } from "express"
import UserModel from "../../models/User"

const updatePasswordUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const { password } = req.body

    const user = await UserModel.findOne({_id : id})
    if(!user){
        return res.status(400).json({ error: "Usuário não encontrado na base de dados!" })
    }

    if (!password) {
        return res.status(400).json({ error: "A senha é de preenchimento obrigatório" })
    }
    if (password === '' ) {
        return res.status(400).json({ error: "A senha é de preenchimento obrigatório" })
    }

    try {
        await UserModel.updateOne({ _id: id }, { $set: { password }})
        .then(() => {
            return res.status(200).json({ message: `Senha do usuário ${id} atualizado com sucesso!`})
        }).catch(error => {
            return res.status(400).json({ error: `Não foi possível atualizar a senha do usuário. Verifique os dados ou tente novamente mais tarde. Erro: ${error.message}, code: ${error.code}`})
        })
    } catch (error) {
        return res.status(500).json({ error: `Internal server error. Error: ${error}` })
    }
}

export default updatePasswordUser