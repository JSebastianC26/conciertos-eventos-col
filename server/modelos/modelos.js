import dbExpressions from '../controladores/constructor.js';

let sql = await dbExpressions.Eventos.read({limit:3, orderBy:"id asc"});

const Eventos = async () => {
    await db.sentencias.ejecutar(sql);
    // console.log(sql, Eventos);
    // console.table(Eventos.rows);
}

export default Eventos;