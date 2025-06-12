import pg from "pg";
import { config } from 'dotenv';

config();

const DATABASE_URL = process.env.DATABASE_URL;
const SSL_DB = process.env.SSL_DB;

let l_ssl = false;

if (SSL_DB === 'S') {
    l_ssl = true;
}

const pool = new pg.Pool({
    connectionString: DATABASE_URL,
    ssl: l_ssl
});

export default pool;