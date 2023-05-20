import { Request, Response } from "express"
import UserModel from "../../models/User"

const updateOneUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, cpf, email, role } = req.body

    const user = await UserModel.findOne({_id : id})
    if(!user){
        return res.status(400).json({ error: "Usuário não encontrado na base de dados!" })
    }

    if (!name || !cpf || !email || !role) {
        return res.status(400).json({ error: "O nome, cpf, email e permissão são obrigatórios" })
    }
    if (name === '' || cpf  === ''|| email === '' || role.length === 0) {
        return res.status(400).json({ error: "O nome, cpf, email e permissão são obrigatórios" })
    }

    try {
        const newUpdate = { name, cpf, email, role };
        await UserModel.updateOne({ _id: id }, newUpdate)
        .then(() => {
            return res.status(200).json({ message: `Usuário ${id} atualizado com sucesso!`})
        }).catch(error => {
            return res.status(400).json({ error: `Não foi possível atualizar o usuário. Verifique os dados ou tente novamente mais tarde. Erro: ${error.message}, code: ${error.code}`})
        })
    } catch (error) {
        return res.status(500).json({ error: `Internal server error. Error: ${error}` })
    }
}

export default updateOneUser