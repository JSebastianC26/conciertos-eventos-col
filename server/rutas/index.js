import express from 'express';
import { config } from 'dotenv';
import variables from '../modelos/config.js';
config();
const router = express.Router();

router.get('/', (req, res) => {

    const Eventos = [
        {
            artista: "BLESSD",
            titulo: "TRINIDAD BENDITA BOGOTA",
            fechaHora: "NOVIEMBRE 11 • 8:00 PM",
            fecha: "2025-11-22",
            ubicacion: "BOGOTA",
            descripcion: "El bendito 💙💙💙 Presentando su nuevo álbum “TRINIDAD BENDITA” 💙💙 Se prepara Bogotá para este excelente concierto del cantante número 1 de Colombia.",
            url: "/uploads/blessd.jpg",
            promocionar: true,
            categoria: "Concierto",
            agotado: false
        },
        {
            artista: "PERROS CRIOLLOS",
            titulo: "PERROS CRIOLLOS CUCUTA",
            fechaHora: "Junio 11 • 8:00 PM",
            fecha: "2025-06-28",
            ubicacion: "CUCUTA",
            descripcion: "🐶PERROS CRIOLLOS REGRESA A CÚCUTA🐶",
            url: "/uploads/perros-criollos.png",
            promocionar: true,
            categoria: "Concierto",
            agotado: false
        }
    ];

    res.render("Home", {
        title: "Home",
        name: variables.Configuraciones.NOMBRE,
        headerText:variables.Configuraciones.HDRTXT,
        menu: variables.NavBar.public,
        whatsapp: variables.Configuraciones.NUMWPP,
        whatsappText: variables.Configuraciones.TXTWPP,
        instagram: variables.Configuraciones.LINKIG,
        copyRight: variables.Configuraciones.COPYRG,
        Eventos : Eventos
    });
});

// Rutas admin (requieren autenticación)
// app.use('/admin', require('./middleware/auth'), require('./middleware/admin'));

router.get('/admin', (req, res) => {
    res.render('./admin/Admin', {
        title: 'Admin - Conciertos y Eventos COL',
        menu: variables.NavBar.admin
    });
});

router.get('/Login', (req, res) => {
    res.render('Login', {
        title: 'Login - Conciertos y Eventos COL'
    });
});

router.get('/ping', async (req, res) => {
    const result = await pool.query('select now()');
    return res.json(result.rows[0]);
});

export default router;



// Ruta principal



// Rutas admin (requieren autenticación)
// app.use('/admin', require('./middleware/auth'), require('./middleware/admin'));

// app.get('/admin', (req, res) => {
//     res.render('admin/dashboard', {
//         title: 'Panel Admin',
//         layout: 'layouts/admin'
//     });
// });

// app.get('/admin/users', (req, res) => {
//     res.render('admin/users', {
//         title: 'Gestión Usuarios',
//         layout: 'layouts/admin'
//     });
// });

// Error handlers
// app.use((req, res) => {
//     res.status(404).render('errors/404', { title: 'Página no encontrada' });
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).render('errors/500', {
//         title: 'Error del servidor',
//         error: process.env.NODE_ENV === 'development' ? err : {}
//     });
// });