import { Request, Response } from "express"
import ReserveModel from "../../models/Reserve"

const updateOneReserve = async (req: Request, res: Response) => {
    const { id } = req.params
    const { id_user, id_room, initial_date, final_date } = req.body

    const reserve = await ReserveModel.findOne({_id : id})
    if(!reserve){
        return res.status(400).json({ error: "Usuário não encontrado na base de dados!" })
    }

    if (!id_user || !id_room || !initial_date || !final_date) {
        return res.status(400).json({ error: "O usuario, a sala e a data são obrigatórios" })
    }
    if (id_user === '' || id_room  === ''|| initial_date === '' || final_date === '') {
        return res.status(400).json({ error: "O usuario, a sala e a data são obrigatórios" })
    }

    try {
        const newUpdate = { id_user, id_room, initial_date, final_date };
        await ReserveModel.updateOne({ _id: id }, newUpdate)
        .then(() => {
            return res.status(200).json({ message: `Reserva ${id} atualizado com sucesso!`})
        }).catch(error => {
            return res.status(400).json({ error: `Não foi possível atualizar a reserva. Verifique os dados ou tente novamente mais tarde. Erro: ${error.message}, code: ${error.code}`})
        })
    } catch (error) {
        return res.status(500).json({ error: `Internal server error. Error: ${error}` })
    }
}

export default updateOneReserve