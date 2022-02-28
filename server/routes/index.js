var express = require("express");
var router = express.Router();
const axios = require("axios");

router.post("/", function (req, res, next) {
  const accessToken = req.body.token;
  
  const getEmail = async (token) => {
    const url = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`;
    const response = await axios.get(url);
    const userData = {
      email: response.data.email,
      name: response.data.name,
      picture: response.data.picture,
    };
    res.send(userData);
  };
  getEmail(accessToken);
});

module.exports = router;
