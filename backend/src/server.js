import 'dotenv';
import './database';
import express from 'express';
import consign from 'consign';
import path from 'path';
const app = express();
const router = consign();

app.use(express.json());
router.include(path.join( 'src', 'routes')).into(app);
app.listen(process.env.port, () => {
    console.log(`Servidor rodando na porta ${process.env.port}`);
})