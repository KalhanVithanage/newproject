const mysql = require("mysql");

const dbConnection = {
  db: mysql.createPool({
    host: "mysql_server",
    user: "abc",
    password: "secret",
    database: "test_db",
    
    
  }),
};

module.exports = {
  dbConnection,
};
