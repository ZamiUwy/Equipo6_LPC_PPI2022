const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'becpfyvegb77vrlgya9j-mysql.services.clever-cloud.com',
    user: 'u229zjfgkcs4fdi2',
    password: 'jWcqJdlWI9qtbBwNp4yk',
    database: 'becpfyvegb77vrlgya9j',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;