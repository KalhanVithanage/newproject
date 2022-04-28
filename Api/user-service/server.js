let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
require("dotenv").config();
const mysql = require("mysql");
const { UserScheme } = require("./src/models/user-scheme/user-scheme");
const { dbConnection } = require("./src/db-util/user-scheme/dbconnection");
const app = express();

//scheme Name
const user_scheme = require('./src/handlers/user-scheme/userScheme')

dbConnection.db.getConnection(function (err, connection) {
  // connected! (unless `err` is set)
  if (err) console.log(err);
  else console.log("Database connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/user', user_scheme)

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
