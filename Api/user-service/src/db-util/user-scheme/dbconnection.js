const mysql = require("mysql");

const dbConnection = {
  db: mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "new_schema",
    
    
  }),
};

module.exports = {
  dbConnection,
};
