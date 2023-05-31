import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
})

const RoomModel = mongoose.model('room', RoomSchema);

export default RoomModel