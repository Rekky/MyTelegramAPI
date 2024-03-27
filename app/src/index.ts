import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes/index';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(helmet()); // Añade seguridad a tus headers HTTP
app.use(cors()); // Configura CORS según tus necesidades
app.use(express.json()); // Habilita el parsing de JSON
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
