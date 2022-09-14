var mysql = require('mysql');

const host = process.env.MYSQL_DB_HOST
const port = process.env.MYSQL_DB_PORT
const database = process.env.MYSQL_DB_NAME
const user = process.env.MYSQL_DB_USER
const password = process.env.MYSQL_DB_PASSWORD


const connectionObj = { host, user, password, database }

function connectDB(conObj) {
    var con = mysql.createConnection(conObj);
    con.connect(function (err) {
        var newConObj = { host, user, password }
        if (err) {
            if (err.code == "ER_BAD_DB_ERROR") {
                if (JSON.stringify(conObj) !== JSON.stringify(newConObj)) {
                    connectDB(newConObj)
                    return;
                }
                throw err
            }
            if (err.code == "ER_DBACCESS_DENIED_ERROR") {
                console.log("Either Database username on password incorrect");
            }
        } else {
            if (JSON.stringify(conObj) === JSON.stringify(newConObj)) {
                con.query("CREATE DATABASE " + database, function (err, result) {
                    if (err) throw err;
                    console.log("Database created");

                });
            }
            console.log("MySql DB Connected!");
        }
    });
}

connectDB(connectionObj)