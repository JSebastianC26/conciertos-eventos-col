import express from 'express';
import { config } from 'dotenv';
import variables from '../modelos/config.js';
config();
const router = express.Router();

const Eventos = [
    {
        id: 1,
        artista: "BLESSD",
        titulo: "💙BLESSD - BOGOTÁ 💙",
        fechaHora: "NOVIEMBRE 22 • 8:00 PM",
        fecha: "2025-11-22",
        ubicacion: "Vive Claro - BOGOTA",
        descripcion: "💙 EL BENDITO - TRINIDAD BENDITA 💙",
        url: "/uploads/blessd-tinidad-bendita.jpg",
        promocionar: true,
        categoria: "Concierto",
        agotado: false,
        tipo: "concierto",
        imagenLocalidades: "/uploads/blessd-tinidad-bendita-localidades.jpg",
        localidades: [
            { nombre: "117,119,121,123 (7 años)", precio: 140000 },
            { nombre: "118,120,122,124 (18 años)", precio: 140000 },
            { nombre: "Platea 2 (18 años)", precio: 155000 },
            { nombre: "129,131 (7 años)", precio: 200000 },
            { nombre: "130,132 (18 años)", precio: 200000 },
            { nombre: "125,127 (7 años)", precio: 260000 },
            { nombre: "126,128 (18 años)", precio: 240000 },
            { nombre: "109,111,113,115 (7 años)", precio: 325000 },
            { nombre: "110,112,114,116 (18 años)", precio: 325000 },
            { nombre: "Platea 1 (18 años)", precio: 370000 },
            { nombre: "101,103,105,107 (7 años)", precio: 400000 },
            { nombre: "102,104,106,108 (18 años)", precio: 400000 },
            { nombre: "PALCOS PLATINO (x10)(individuales)", precio: 9800000 },
            { nombre: "PALCOS DIAMANTE (x10)(individuales)", precio: 15000000 }
        ]
    },
    {
        id: 2,
        artista: "PERROS CRIOLLOS",
        titulo: "🐶 ¡PERROS CRIOLLOS LLEGAN A CÚCUTA!🐶",
        fechaHora: "Junio 28 • 8:00 PM",
        fecha: "2025-06-28",
        ubicacion: "Coliseo del Colegio Municipal - CUCUTA",
        descripcion: "¡Prepárate para una noche de risas, locura y pura gozadera con los comediantes más callejeros y queridos del país!",
        url: "/uploads/perros-criollos-cucuta.png",
        promocionar: true,
        categoria: "Comedia",
        agotado: false,
        tipo: "teatro",
        imagenLocalidades: "/uploads/perros-criollos-cucuta-localidades.png",
        localidades: [
            { nombre: "General", precio: 120000 },
            { nombre: "Balcones", precio: 140000 },
            { nombre: "Preferencial", precio: 185000 },
            { nombre: "Vip", precio: 290000 }
        ]
    },
    {
        id: 3,
        artista: "MORAT",
        titulo: "🎸 MORAT-ASUNTOS PENDIENTES 🎸",
        fechaHora: "Julio 11 • 8:00 PM",
        fecha: "2025-07-11",
        ubicacion: "BUCARAMANGA -PLAZA DE TOROS GIRÓN",
        descripcion: "MORAT-ASUNTOS PENDIENTES EN BUCARAMANGA",
        url: "/uploads/morat-asuntos-pendientes.jpg",
        promocionar: true,
        categoria: "Concierto",
        agotado: false,
        tipo: "concierto",
        imagenLocalidades:"/uploads/morat-asuntos-pendientes-buc-localidades.jpg",
        localidades: [
            { nombre: "General familiar", precio: 210000 },
            { nombre: "General", precio: 210000 },
            { nombre: "Preferencial familiar", precio: 300000 },
            { nombre: "Preferencial", precio: 300000 },
            { nombre: "Vips fans familiar", precio: 560000 },
            { nombre: "Vips fans", precio: 560000 },
            { nombre: "Platea familiar", precio: 560000 },
            { nombre: "Platea", precio: 560000 },
            { nombre: "Palcos familiar", precio: 5350000 },
            { nombre: "Palcos", precio: 5350000 }
        ]
    },
    {
        id: 4,
        artista: "MORAT",
        titulo: "🎸 MORAT-ASUNTOS PENDIENTES 🎸",
        fechaHora: "Junio 28 • 7:00 PM",
        fecha: "2025-06-28",
        ubicacion: "BARRANQUILLA - ESTADIO ROMELIO MARTINEZ",
        descripcion: "MORAT-ASUNTOS PENDIENTES EN BARRANQUILLA",
        url: "/uploads/morat-asuntos-pendientes.jpg",
        promocionar: true,
        categoria: "Concierto",
        agotado: false,
        tipo: "concierto",
        imagenLocalidades:"/uploads/morat-asuntos-pendientes-bar-localidades.jpg",
        localidades: [
            { nombre: "Palco VIP occidental", precio: 800000 },
            { nombre: "Palco VIP Oriental Familiar", precio: 800000 },
            { nombre: "Gramilla Platino Oriental Familiar", precio: 421000 },
            { nombre: "Gramilla Platino Occidental", precio: 421000 },
            { nombre: "Gramilla VIP", precio: 375000 },
            { nombre: "Gramilla General", precio: 280000 },
            { nombre: "Gradería Occidental Familiar", precio: 360000 },
            { nombre: "Gradería Oriental", precio: 275000 },
            { nombre: "Gradería Familiar", precio: 165000 }
        ]
    },
    {
        id: 5,
        artista: "MORAT",
        titulo: "🎸 MORAT-ASUNTOS PENDIENTES 🎸",
        fechaHora: "Julio 06 • 7:00 PM",
        fecha: "2025-07-06",
        ubicacion: "CALI  - DIAMANTE DE BÉISBOL",
        descripcion: "MORAT-ASUNTOS PENDIENTES EN CALI",
        url: "/uploads/morat-asuntos-pendientes.jpg",
        promocionar: true,
        categoria: "Concierto",
        agotado: false,
        tipo: "concierto",
        imagenLocalidades:"",
        localidades: [
            { nombre: "General familiar", precio: 210000 },
            { nombre: "General", precio: 210000 },
            { nombre: "Preferencial familiar", precio: 300000 },
            { nombre: "Preferencial", precio: 300000 },
            { nombre: "Vips fans familiar", precio: 560000 },
            { nombre: "Vips fans", precio: 560000 },
            { nombre: "Platea familiar", precio: 560000 },
            { nombre: "Platea", precio: 560000 },
            { nombre: "Palcos familiar", precio: 5350000 },
            { nombre: "Palcos", precio: 5350000 }
        ]
    },
    {
        id: 6,
        artista: "MORAT",
        titulo: "🎸 MORAT-ASUNTOS PENDIENTES 🎸",
        fechaHora: "Julio 04 • 7:00 PM",
        fecha: "2025-07-04",
        ubicacion: "MANIZALES - PLAZA DE TOROS ",
        descripcion: "MORAT-ASUNTOS PENDIENTES EN MANIZALES",
        url: "/uploads/morat-asuntos-pendientes.jpg",
        promocionar: false,
        categoria: "Concierto",
        agotado: false,
        tipo: "concierto",
        imagenLocalidades:"",
        localidades: [
            { nombre: "Platino", precio: 500000 },
            { nombre: "Vip familiar", precio: 315000 },
            { nombre: "Vip preferencial", precio: 315000 },
            { nombre: "Preferencial A", precio: 250000 },
            { nombre: "Preferencial B", precio: 240000 }
        ]
    },
    {
        id: 7,
        artista: "BAD BUNNY",
        titulo: "🐰📸BAD BUNNY - DEBÍ TIRAR MÁS FOTOS WORLD TOUR 📸🐰",
        fechaHora: "Enero 23/24/25 DEL 2026",
        fecha: "2026-01-23",
        ubicacion: "ESTADIO ATANASIO GIRARDOT - MEDELLÍN",
        descripcion: "🐰📸BAD BUNNY - DEBÍ TIRAR MÁS FOTOS WORLD TOUR 📸🐰 EN MEDELLÍN",
        url: "/uploads/bad-bunny-dtmf.jpg",
        promocionar: false,
        categoria: "Concierto",
        agotado: false,
        tipo: "concierto",
        imagenLocalidades: "/uploads/bad-bunny-dtmf-localidades.jpg",
        localidades: [
            { nombre: "SUR BAJA (+18)", precio: 280000 },
            { nombre: "SUR ALTA (+18)", precio: 310000 },
            { nombre: "ORIENTAL BAJA FAMILIAR (+7)", precio: 460000 },
            { nombre: "ORIENTAL ALTA (+18)", precio: 510000 },
            { nombre: "GRAMILLA NUEVA YOL (+18)", precio: 760000 },
            { nombre: "OCCIDENTAL BAJA FAMILIAR (+7)", precio: 824000 },
            { nombre: "OCCIDENTAL ALTA (+18)", precio: 950000 },
            { nombre: "OCCIDENTAL ALTA SILVER (+18)", precio: 1000000 },
            { nombre: "GRAMILLA VIP (+18)", precio: 1200000 },
            { nombre: "PMU (+18)", precio: 1250000 },
            { nombre: "PALCOS ORO OCCIDENTAL x10 (+18)", precio: 18000000 },
            { nombre: "PALCOS ORO ORIENTAL FAMILIAR x10 (+7)", precio: 18000000 },
            { nombre: "PALCOS PLATINO OCCIDENTAL x10 (+18)", precio: 26700000 },
            { nombre: "PALCOS PLATINO ORIENTAL x10 (+18)", precio: 26700000 }
        ]
    },
    {
        id: 8,
        artista: "FUERZA REGIDA",
        titulo: "🎶🎷🥁FUERZA REGIDA🥁🎷🎶",
        fechaHora: "Agosto 01 • 07:00 PM",
        fecha: "2025-01-23",
        ubicacion: "MOVISTAR ARENA - BOGOTÁ",
        descripcion: "🎶🎷🥁FUERZA REGIDA🥁🎷🎶 EN BOGOTÁ",
        url: "/uploads/fuerza-regida.jpg",
        promocionar: true,
        categoria: "Concierto",
        agotado: false,
        tipo: "concierto",
        imagenLocalidades: "/uploads/fuerza-regida-localidades.jpg",
        localidades: [
            { nombre: "Tribuna fan sur", precio: 805000 },
            { nombre: "Tribuna fan norte", precio: 805000 },
            { nombre: "Piso 2 (202-205 & 215-218)", precio: 530000 },
            { nombre: "Platea", precio: 473000 },
            { nombre: "Piso 2 (206-207 & 213-214)", precio: 470000 },
            { nombre: "Piso 2 (208-212)", precio: 370000 },
            { nombre: "Piso 3 (307-313)", precio: 315000 },
            { nombre: "Piso 3 (305-306 & 314-315)", precio: 300000 },
            { nombre: "Piso 3 (303-304 & 316-317)", precio: 272000 },
            { nombre: "Piso 3 (303-318)", precio: 240000 }
        ]
    },
    {
        id: 9,
        artista: "F*CKS NEWS",
        titulo: "🚨 F*CKS NEWS NOTICIERO -BARRANQUILLA🚨",
        fechaHora: "JUNIO 17 • 08:00 PM",
        fecha: "2025-06-17",
        ubicacion: "Teatro Jose Consuegra Higgins",
        descripcion: "🚨 F*CKS NEWS NOTICIERO -BARRANQUILLA🚨",
        url: "/uploads/fucks-news-barranquilla.jpg",
        promocionar: true,
        categoria: "Comedia",
        agotado: false,
        tipo: "teatro",
        imagenLocalidades: "",
        localidades: [
            { nombre: "GENERAL", precio: 150000 },
            { nombre: "BALCÓN", precio: 130000 }
        ]
    },
    {
        id: 10,
        artista: "F*CKS NEWS",
        titulo: "🚨 F*CKS NEWS NOTICIERO -MOSQUERA",
        fechaHora: "JUNIO 23 • 08:00 PM",
        fecha: "2025-06-23",
        ubicacion: "Auditorio municipal de Mosquera",
        descripcion: "¡Prepárate para una noche de risas, locura y pura gozadera con los comediantes más callejeros y queridos del país!",
        url: "/uploads/fucks-news-mosquera.jpg",
        promocionar: true,
        categoria: "Comedia",
        agotado: false,
        tipo: "teatro",
        imagenLocalidades: "",
        localidades: [
            { nombre: "ZONA IZQUIERDA", precio: 150000 },
            { nombre: "ZONA CENTRAL", precio: 150000 },
            { nombre: "ZONA DERECHA", precio: 150000 }
        ]
    }



];


router.get('/', (req, res) => {
    const AgrupadosPorFecha = Eventos.reduce((acc, item) => {
        const fecha = item.fecha;
        if (!acc[fecha]) {
            acc[fecha] = [];
        }
        acc[fecha].push(item);
        return acc;
    }, {});


    res.render("Home", {
        title: "Home",
        name: variables.Configuraciones.NOMBRE,
        headerText:variables.Configuraciones.HDRTXT,
        menu: variables.NavBar.public,
        whatsapp: variables.Configuraciones.NUMWPP,
        whatsappText: variables.Configuraciones.TXTWPP,
        instagram: variables.Configuraciones.LINKIG,
        copyRight: variables.Configuraciones.COPYRG,
        Eventos : Eventos,
        EventosPorFecha : AgrupadosPorFecha
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

router.get('/entradas', (req, res) => {

    const eventId = req.query.id;

    const evento = Eventos.find(e => e.id == eventId);

    res.render("Entradas", {
        title: "Entradas",
        name: variables.Configuraciones.NOMBRE,
        headerText:variables.Configuraciones.HDRTXT,
        menu: variables.NavBar.public,
        whatsapp: variables.Configuraciones.NUMWPP,
        whatsappText: variables.Configuraciones.TXTWPP,
        instagram: variables.Configuraciones.LINKIG,
        copyRight: variables.Configuraciones.COPYRG,
        Evento : evento
    });
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