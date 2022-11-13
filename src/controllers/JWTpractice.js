const jwt = require("jsonwebtoken");

exports.createToken = (req, res) => {
  let Payload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: {
      Name: "Ahosan kabir",
      city: "gajipur",
      admin: true,
    },
  };

  let Token = jwt.sign(Payload, "SecretKey1234");

  res.send(Token);
};

exports.decodeToken = (req, res) => {
  let Token = req.headers['token']; //single quote er moddhe rekhe dibo.

  jwt.verify(Token, "SecretKey1234", (err, decoded) => {
    if (err) {
      res.status(401).json({ status: "Invalid Token", data: err });
    } else {
      res.status(201).json({ status: "succes", data: decoded });
    }
  });
};
