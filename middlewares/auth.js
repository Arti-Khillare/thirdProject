const route = require("../routes/route");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    let token = req.headers["x-api-key"];
    if (!token) {
      return res.status(400).send({ status: false, msg: "Token is Missing!" });
    } else {
      let decodedToken = jwt.verify(token, "thorium@group23");
      if (decodedToken) {
        req.user = decodedToken;
        next();
      } else {
        res.status(400).send({ status: false, msg: "Token is Missing" });
      }
    }
  } catch (error) {
    res.status(400).send({ msg: "Error", Error: error.message });
  }
};

module.exports = {
  auth,
};
