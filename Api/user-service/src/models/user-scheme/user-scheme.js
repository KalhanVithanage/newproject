const { dbConnection } = require("../../db-util/user-scheme/dbconnection");
var jwt = require("jsonwebtoken");

const UserScheme = {
  Login: (email, password) => {
    const login_query = `SELECT *  FROM users WHERE email = (${email}) AND  password = (${password}) ;`;
    return new Promise(function (resolve, reject) {
      dbConnection.db.query(login_query, function (err, result) {
        if (result === undefined) {
          reject(new Error("Error rows is undefined"));
        } else {
          if (result.length === 0) {
            reject("email or password invalid");
          }
          if (result.length) {
            const token = jwt.sign({ id: result[0].id }, "#123");
            resolve({
              msg: "login successfully",
              token,
              user: {
                id: result[0].id,
              },
            });
          }
        }
      });
    });
  },
};

module.exports = { UserScheme };
