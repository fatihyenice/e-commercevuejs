 const mysql = require('mysql2'); 

const connec = mysql.createPool({
    host: 'localhost',
    database: 'fydevshop',
    user: 'root',
    password: '',
    waitForConnections: true,
    connectionLimit: 10, 
}); 

module.exports = connec;