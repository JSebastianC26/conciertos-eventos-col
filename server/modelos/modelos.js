import dbExpressions from '../controladores/constructor.js';

let sql = await dbExpressions.Eventos.read({limit:3, orderBy:"id asc"});

const Eventos = async () => {
    await db.sentencias.ejecutar(sql);
}

export default Eventos;