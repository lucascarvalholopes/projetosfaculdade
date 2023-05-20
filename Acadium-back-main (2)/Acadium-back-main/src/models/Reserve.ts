import mongoose, { Types } from "mongoose";

const ReserveSchema = new mongoose.Schema({
    id: {
        require: true,
        type: String,
    },
    id_user: {
        require: true,
        type: Types.ObjectId,
        ref: 'user'
    },
    id_room: {
        require: true,
        type: Types.ObjectId,
        ref: 'user'
    },
    initial_date: {
        require: true,
        type: Date,
    },
    final_date: {
        require: true,
        type: Date,
    }
})

const ReserveModel = mongoose.model('reserve',ReserveSchema);

export default ReserveModel;