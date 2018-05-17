var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "	wulhbntwif2nwt0j",
        password: "gd8tso2xu104y3b0",
        database: "uinavw5a5l9jludb",
    });
};

connection.connect();
module.exports = connection;