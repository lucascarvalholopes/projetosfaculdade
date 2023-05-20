import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: (cpf: string) => {
                return cpf.length === 11;
            },
            message: "CPF inválido!",
        },
    },
    email: {
        type: String,
        required: true,
    },
    role: Array<Number>,
    password: {
        type: String,
        required: true,
    },
})

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;