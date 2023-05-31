import { Request, Response } from "express"
import ReserveModel from "../../models/Reserve"

const deleteOneReserve = async (req: Request, res: Response) => {
    const { id } = req.params

    const reserve = await ReserveModel.findOne({_id : id})
    if(!reserve){
        return res.status(400).json({ error: "Reserva não encontrado na base de dados!" })
    }

    try {
        await ReserveModel.deleteOne({ _id: id })
        .then(() => {
            return res.status(200).json({ message: `Reserva ${id} deletado com sucesso!`})
        }).catch(error => {
            return res.status(400).json({ error: `Não foi possível deletar a reserva. Tente novamente mais tarde. Erro: ${error.message}, code: ${error.code}`})
        })
    } catch (error) {
        return res.status(500).json({ error: `Internal server error. Error: ${error}` })
    }
}

export default deleteOneReserve