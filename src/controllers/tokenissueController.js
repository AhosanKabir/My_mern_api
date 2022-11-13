const jwt = require("jsonwebtoken");

exports.tokenIssue = (req, res) => {
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