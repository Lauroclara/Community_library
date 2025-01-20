import sqlite from 'aqkite3';

const db = new sqlite3.Database('library_db.sqlite',(err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados', err.messade);
    } else {
        console.log('Conectado com sucesso ao banco de dados SQLite.');
 }       
 })

 export default db;