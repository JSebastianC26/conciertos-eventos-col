import constructor from '../controladores/constructor.js';
import db from '../controladores/ejecutar.js';
import fs from 'fs';

console.log('Existe el archivo constructor?', fs.existsSync('../controladores/constructor.js'));

const NavBar = {
    public : [
        { title : "Eventos", icon: "fas fa-clock", ruta: "#eventos" },
        { title : "Calendario", icon: "fas fa-calendar-alt", ruta: "#calendario" },
        { title : "Contáctanos", icon: "fas fa-envelope", ruta: "#contactanos" },
        { title : "Quienes Somos?", icon: "fas fa-building", ruta: "#quienesSomos" }
    ],
    admin : [
        { title : "Eventos", icon: "fas fa-clock", ruta: "admin/eventos" },
        { title : "Usuarios", icon: "fas fa-user", ruta: "admin/usuarios" },
        { title : "Lugares", icon: "fas fa-location-dot", ruta: "admin/lugares" },
        { title : "Categorías", icon: "fas fa-icons", ruta: "admin/categorías" },
        { title : "Ciudades", icon: "fas fa-city", ruta: "admin/ciudades" },
        { title : "Configuración", icon: "fas fa-gear", ruta: "admin/configuracion" }
    ]
};

let sql = await constructor.Configuraciones.read({
    columnas:"*"
});

const consultaConfig = async () => {
    let value = await db.ejecutar(sql);
    console.log(sql);
    console.table(value.rows);
    return value.rows;
}
let config = await consultaConfig();

const Configuraciones = {
    NUMWPP : config.filter(item => item.codigo_variable === 'NUMWPP')[0].valor,
    TXTWPP : config.filter(item => item.codigo_variable === 'TXTWPP')[0].valor,
    LINKIG : config.filter(item => item.codigo_variable === 'LINKIG')[0].valor,
    COPYRG : config.filter(item => item.codigo_variable === 'COPYRG')[0].valor,
    HDRTXT : config.filter(item => item.codigo_variable === 'HDRTXT')[0].valor,
    NOMBRE : config.filter(item => item.codigo_variable === 'NOMBRE')[0].valor
}


export default {
    NavBar,
    Configuraciones
}