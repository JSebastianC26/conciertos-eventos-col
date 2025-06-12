import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from 'dotenv';
import router  from './server/rutas/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
config();

const PORT = process.env.PORT;


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"));

app.use('/', router);

// app.use('/admin', indexRoutes);

app.use('/login', router);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
