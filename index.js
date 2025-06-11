import express from 'express';
import {config} from 'dotenv';
import pg from 'pg';
config();
const app = express();
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL, 
    ssl: true
})
const PORT = process.env.PORT;

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