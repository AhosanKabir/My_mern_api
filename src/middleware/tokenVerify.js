const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let Token = req.headers["token"]; //single quote er moddhe rekhe dibo.

  jwt.verify(Token, "SecretKey1234", (err, decoded) => {
    if (err) {
      res.status(401).json({ status: "Invalid Token", data: err });
    } else {
      next();
    }
  });
};
