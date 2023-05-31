import { Request, Response } from "express"
import RoomModel from "../../models/Room"

const updateOneRoom = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, capacity, location } = req.body

    const user = await RoomModel.findOne({ _id: id })
    if (!user) {
        return res.status(400).json({ error: "Sala/Laboratório não encontrado na base de dados!" })
    }

    if (!name || !capacity || !location) {
        return res.status(400).json({ error: "O nome, a capacidade e a localização são obrigatórios" })
    }

    if (name === '' || location === '') {
        return res.status(400).json({ error: "O nome, a capacidade e a localização são obrigatórios" })
    }

    if (capacity <= 0) {
        return res.status(400).json({ error: "A capacidade não deve ser inferior a 0" })
    }

    try {
        const newUpdate = { name, capacity, location };
        await RoomModel.updateOne({ _id: id }, newUpdate)
            .then(() => {
                return res.status(200).json({ message: `Sala/Laboratório ${id} atualizado com sucesso!` })
            }).catch(error => {
                return res.status(400).json({ error: `Não foi possível atualizar a Sala/Laboratório. Verifique os dados ou tente novamente mais tarde. Erro: ${error.message}, code: ${error.code}` })
            })
    } catch (error) {
        return res.status(500).json({ error: `Internal server error. Error: ${error}` })
    }
}

export default updateOneRoom