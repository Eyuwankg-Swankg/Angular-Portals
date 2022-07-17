const axios = require("axios");
const express = require("express");
const router = express.Router();

//@type      POST
//@route     /login
//@desc      route to authenticate login
//@access    PUBLIC
router.post("/login", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/RESTAdapter/sakthi_portal_login`;
  const bodyRequest = `<?xml version="1.0" encoding="UTF-8"?>
  <ns0:ZFM_LOGIN_SAKTHI_PORTAL xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
     <PASSWORD>${req.body.Password}</PASSWORD>
     <USERNAME>${req.body.UserID}</USERNAME>
  </ns0:ZFM_LOGIN_SAKTHI_PORTAL>`;
  const config = {
    auth: {
      username: "POUSER@1",
      password: "Tech@2022",
    },
    headers: { "Content-Type": "text/xml" },
  };
  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("error", error);
    });
});

router.get("/", (req, res) => res.send("Customer portal"));

module.exports = router;
