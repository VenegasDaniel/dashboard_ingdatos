const express = require('express');
const mysql = require('mysql');
const {vistaPrincipal, vistaPanel2, vistaPanel3, vistaPanel4} = require('../controllers/pageController');

const router = express.Router();

router.get('/', vistaPrincipal);
router.get('/panel2',vistaPanel2);
router.get('/panel3', vistaPanel3);
router.get('/panel4', vistaPanel4);

router.get("api/data", async (req, res) => {
    const connection = await new mssql.ConnectionPool({
        user : 'sa',
        password : '1234',
        server :'localhost',
        database : 'mydatabase '
    });
    const result = await connection.request().query('SELECT * FROM mytable');
    const data = result.rows.map(row => {
        return row.values;
    });
    res.json(data);
});

module.exports = {routes : router}