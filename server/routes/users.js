var express = require("express");
var router = express.Router();
const axios = require("axios");

router.post("/", function (req, res, next) {
  const accessToken = req.body.token;
  res.send("logged in");
  const getEmail = async (token) => {
    const url = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`;
    const response = await axios.get(url);
    const userData = {
      email: response.email,
      name: response.name,
      picture: response.picture,
    };
    return userData;
  };
  getEmail(accessToken);
});

module.exports = router;
