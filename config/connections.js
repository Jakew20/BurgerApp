const mysql = require('mysql');

// configures connection
var connection;

    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        database: 'burgers_db',
        user: 'root',
        password: 'root',
    });
    
// Establishes connection
connection.connect((err) => {
    if (err) throw err;
    console.log('Connection established at: ' + connection.config.host + ":" + connection.config.port);
});

module.exports = connection;