import express from 'express';
import {config} from 'dotenv';
import pg from 'pg';
config();
const app = express();

const PORT = process.env.PORT;
const SSL_DB = process.env.SSL_DB;
const DATABASE_URL = process.env.DATABASE_URL;

let l_ssl = false;

if (SSL_DB=='S'){
    l_ssl = true;
}

const pool = new pg.Pool({
    connectionString: DATABASE_URL, 
    ssl: l_ssl
})

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/ping', async (req, res) =>{
    const result = await pool.query('select now()');

    return res.json(result.rows[0])
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});