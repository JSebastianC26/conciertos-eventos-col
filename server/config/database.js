// import pg from "pg";
// import { config } from 'dotenv';

// config();

// const DATABASE_URL = process.env.DATABASE_URL;
// const SSL_DB = process.env.SSL_DB;

// let l_ssl = false;

// if (SSL_DB === 'S') {
//     l_ssl = true;
// }

// // const pool = new pg.Pool({
// //     connectionString: DATABASE_URL,
// //     ssl: l_ssl
// // });

// const pool = new pg.Pool({
//     connectionString: DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: l_ssl
//     }
// });


// export default pool;


import pg from "pg";
import { config } from 'dotenv';
config();

const DATABASE_URL = process.env.DATABASE_URL;

// Configuración optimizada para Supabase
const pool = new pg.Pool({
    connectionString: DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    max: 20, // Máximo de conexiones
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
});

// Manejo de errores
pool.on('error', (err) => {
    console.error('Error en pool de conexiones:', err);
});

export default pool;
