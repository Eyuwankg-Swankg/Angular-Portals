const axios = require("axios");
const express = require("express");
const router = express.Router();

const config = {
  auth: {
    username: "POUSER@1",
    password: "Tech@2022",
  },
  headers: { "Content-Type": "text/xml" },
};

//@type      POST
//@route     /login
//@desc      route to authenticate login
//@access    PUBLIC
router.post("/login", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eyuwankg_login`;
  const bodyRequest = `<?xml version="1.0" encoding="UTF-8"?>
  <ns0:ZFM_CUSTOMER_LOGIN_EYUWANKG xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
  <PASSWORD>${req.body.Password}</PASSWORD>
  <USERNAME>${req.body.UserID}</USERNAME>
  </ns0:ZFM_CUSTOMER_LOGIN_EYUWANKG>`;
  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /vendorprofile
//@desc      route to get vendorprofile data
//@access    PUBLIC
router.post("/vendorprofile", (req, res) => {
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eyuwankg_vendor_profile`;
  const bodyRequest = `<?xml version="1.0" encoding="UTF-8"?>
  <ns0:ZFM_VENDOR_PROFILE_EYUWANKG xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
     <VENDOR_NO>MOHANRAJ</VENDOR_NO>
     <IT_BANKDETAIL>
        <item>
           <VENDOR/>
           <BANK_CTRY/>
           <BANK_KEY/>
           <BANK_ACCT/>
           <CTRL_KEY/>
           <PARTNER_BK/>
           <COLL_AUTH/>
           <BANK_REF/>
        </item>
     </IT_BANKDETAIL>
     <IT_VENDORIBANDETAIL>
        <item>
           <VENDOR/>
           <BANK_CTRY/>
           <BANK_KEY/>
           <BANK_ACCT/>
           <CTRL_KEY/>
           <IBAN/>
           <VALID_FROM/>
           <DUMMY/>
        </item>
     </IT_VENDORIBANDETAIL>
  </ns0:ZFM_VENDOR_PROFILE_EYUWANKG>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send({ data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
