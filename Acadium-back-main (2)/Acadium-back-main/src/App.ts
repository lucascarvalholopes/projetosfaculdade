import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import connectionMongo from './database';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.get('/', (_, res) => res.send(`🚀 Servidor rodando!\nAcesse: http://localhost:${port}/api`))

app.use('/api', router)

connectionMongo().then(() => {
    app.listen(port, () => console.log(`🚀 Servidor rodando no endereço http://localhost:${port}`))
})
