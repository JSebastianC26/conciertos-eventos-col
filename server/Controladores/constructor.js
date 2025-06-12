import crearSentencia from './CrearSentencia.js';

const Roles = new crearSentencia('tRoles');
const Usuarios = new crearSentencia('tUsuarios');

const Categorias = new crearSentencia('tCategorias');
const Ciudades = new crearSentencia('tCuidades');
const Estados = new crearSentencia('tEstados');
const LugaresEventos = new crearSentencia('tLugaresEventos');
const Localidades = new crearSentencia('tLocalidades');
const Eventos = new crearSentencia('tEventos');
const EventosLocalidades = new crearSentencia('tEventosLocalidades');
const Configuraciones = new crearSentencia('tConfiguraciones');

const Constructor = {
    Roles,
    Usuarios,
    Categorias,
    Ciudades,
    Estados,
    LugaresEventos,
    Localidades,
    Eventos,
    EventosLocalidades,
    Configuraciones
}

export default Constructor;