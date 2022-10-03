const rutas = require('express').Router();
const conexion = require('./config/conexion');

// asignamos todas las rutas
/*rutas.get('/', function(req, res) {
    res.send('hola desde rutas inicio');
});*/

// agregamos las rutas nuevas con sus sentencias sql

// get equipos
rutas.get('/', (req, res) => {
    let sql = 'select * from tb_equipo';
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});

// get un equipo
rutas.get('/:id', (req, res) => {
    const {id} = req.params;
    let sql = 'select * from tb_equipo where id_equipo = ?';
    conexion.query(sql, [id], (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});

// agregar nuevo equipo 
rutas.post('/', (req, res) => {
    const { nombre, logo } = req.body;
    let sql = `insert into tb_equipo(nombre, logo) values('${nombre}', '${logo}')`;
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json({status: 'Equipo agregado con exito'});
        }
    });
});

// delete un equipo
rutas.delete('/:id', (req, res) => {
    const {id} = req.params;
    let sql = `delete from tb_equipo where id_equipo = '${id}'`;
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json({status: 'Equipo eliminado con éxito'});
        }
    });
});

// update un equipo
rutas.put('/:id', (req, res) => {
    const {id} = req.params;
    const {nombre, logo} = req.body;
    let sql = `update tb_equipo set nombre = '${nombre}', logo = '${logo}' where id_equipo = '${id}'`;
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json({status: 'Equipo modificado con éxito'});
        }
    });
});

module.exports = rutas;