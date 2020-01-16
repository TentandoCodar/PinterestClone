import 'dotenv';
import './database';
import express from 'express';
import consign from 'consign';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const router = consign();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/files",express.static(path.resolve(__dirname, 'tmp', 'uploads')));
router.include(path.join( 'src', 'routes')).into(app);


app.listen(process.env.port, () => {
    console.log(`Servidor rodando na porta ${process.env.port}`);
})