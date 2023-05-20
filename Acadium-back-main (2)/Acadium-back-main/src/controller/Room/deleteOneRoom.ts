import { Request, Response } from "express"
import RoomModel from "../../models/Room"

const deleteOneRoom = async (req: Request, res: Response) => {
    const { id } = req.params

    const room = await RoomModel.findOne({_id : id})
    
    if(!room){
        return res.status(400).json({ error: "Sala/Laboratório não encontrado na base de dados!" })
    }

    try {
        await RoomModel.deleteOne({ _id: id })
        .then(() => {
            return res.status(200).json({ message: `Sala/Laboratório ${id} deletado com sucesso!`})
        }).catch(error => {
            return res.status(400).json({ error: `Não foi possível deletar a Sala/Laboratório. Tente novamente mais tarde. Erro: ${error.message}, code: ${error.code}`})
        })
    } catch (error) {
        return res.status(500).json({ error: `Internal server error. Error: ${error}` })
    }
}

export default deleteOneRoom