var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
        user: "	y6lh7drq900uvlm0",
        password: "wnctnnrxcld1sllx",
        database: "ovvj04fmoxlymsxf",
    });
};

connection.connect();
module.exports = connection;