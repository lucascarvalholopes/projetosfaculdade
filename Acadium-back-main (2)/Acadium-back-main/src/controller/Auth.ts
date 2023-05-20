import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserModel from "../models/User";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const Auth = async (req: Request, res: Response) => {
    const { cpf, password } = req.body;

    if (!cpf || !password) {
        return res.status(400).json({ error: "O CPF e a senha são obrigatórios!" })
    }

    try {
        const user = await UserModel.findOne({cpf});

        if(!user){
            return res.status(400).json({ error: "Usuário não encontrado na base de dados!" })
        }

        if(user.password === password){
            const token = jwt.sign({ userID: user._id }, SECRET_KEY!, { algorithm: 'HS256', noTimestamp: true });
            return res.status(200).json({ token })
        }else{
            return res.status(400).json({error: "Senha inválida!"} )
        }
    } catch (error) {
        return res.status(500)
    }
}

export default Auth