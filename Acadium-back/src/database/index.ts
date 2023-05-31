import mongoose from 'mongoose';
import dotenv from 'dotenv';

import '../models/User';
import '../models/Room';
import '../models/Reserve';

dotenv.config();

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.zpjjshw.mongodb.net/acadium?retryWrites=true&w=majority`;

const connectionMongo = async () => mongoose.connect(DB_URI)
    .then(() => console.log('✔️  Conexão estabelecida com sucesso!'))
    .catch((error) => console.log(`❌  Não foi possível conectar! Erro: ${error}`))

export default connectionMongo;