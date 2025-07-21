import pg from "pg";
import { config } from 'dotenv';
config();

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    // Forzar IPv4
    host: 'db.cfjsprcnmoeshfakokif.supabase.co',
    port: 5432, // o el puerto que te dé Supabase
    database: 'postgres',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    // Configuraciones adicionales
    connectionTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
});

export default pool;
