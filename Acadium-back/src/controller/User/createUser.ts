import { Request, Response } from "express"
import UserModel from "../../models/User";

const createUser = async (req: Request, res: Response) => {
    const {name, cpf, email, role, password} = req.body;

    if(!name || !cpf || !email || !role || !password){
        return res.status(400).json({ error: "O nome, cpf, email, permissão e senha são obrigatórios" })
    }

    try {
        const user = new UserModel({name, cpf, email, role, password})
        user.save().then(user => {
            return res.status(200).json({ message: `Usuário ${user.name} cadastrado com sucesso!`, user })
        }).catch(error => {
            return res.status(400).json({ error: `Não foi possível cadastrar o usuário. Verifique os dados ou tente novamente mais tarde. Erro: ${error.message}, code: ${error.code}`})
        })
    } catch (error) {
        return res.status(500).json({ error: `Internal server error. Error: ${error}`})
    }
    
}

export default createUser