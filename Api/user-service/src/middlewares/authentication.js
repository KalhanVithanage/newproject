const jwt = require("jsonwebtoken");

const BearerAuthentication = (req, res, next) => {
  const BearerHeader = req.headers["authorization"];
  const token = BearerHeader && BearerHeader.split(" ")[1];
  
  if (token === null) res.status(401).json("token not found");
  try {
    const verification = jwt.verify(token, "#123");

    if (!verification) res.status(401).json({ msg: "verification faild" });

    req.user = verification.id;
    next();
  } catch (e) {
    res.status(401).json({ msg: "token verification faild" });
  }
};

module.exports = BearerAuthentication;
