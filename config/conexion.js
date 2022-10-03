const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'db_basic'
});

conexion.connect((err)=>{
    if (err) {
        console.log('ha ocurrido un error' + err);
    }else{
        console.log('Conección exitosa');
    }
});

module.exports = conexion;