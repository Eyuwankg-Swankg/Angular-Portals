const axios = require("axios");
const express = require("express");
const router = express.Router();
const xml2js = require("xml2js");

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
  //   "UserID":"EMPLOYEE@A1",
  //   "Password":"EYUWANKG123"
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
//@route     /employee_profile
//@desc      route to get employee_profile
//@access    PUBLIC
router.post("/employee_profile", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SAKTHI_SOAP_PIPO&receiverParty=&receiverService=&interface=SI_SAKTHI_EMP_PROFILE&interfaceNamespace=http://sakthi_pipo.com`;
  const bodyRequest = `soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SAKTHI_EMP_PROFILE>
        <PERSONALNO>3</PERSONALNO>
     </urn:ZFM_SAKTHI_EMP_PROFILE>
  </soapenv:Body>
</soapenv:Envelope>`;

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
//@route     /employee_payroll
//@desc      route to get employee_payroll
//@access    PUBLIC
router.post("/employee_payroll", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SAKTHI_SOAP_PIPO&receiverParty=&receiverService=&interface=SI_SAKTHI_EMP_PAYROLL&interfaceNamespace=http://sakthi_pipo.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SAKTHI_FI_EMP_PAYROLL>
        <PERSONALNO>3</PERSONALNO>
        <IT_PAYROL_RESULT>
           <item>
           </item>
        </IT_PAYROL_RESULT>
     </urn:ZFM_SAKTHI_FI_EMP_PAYROLL>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => res.send(data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZFM_SAKTHI_FI_EMP_PAYROLL.Response'][0]));
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /employee_leave_data
//@desc      route to get employee_leave_data
//@access    PUBLIC
router.post("/employee_leave_data", (req, res) => {
  console.log(req.body);

  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SAKTHI_SOAP_PIPO&receiverParty=&receiverService=&interface=SI_SAKTHI_EMP_LEAVE_DATA&interfaceNamespace=http://sakthi_pipo.com`;

  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SAKTHI_EMP_LEAVE_DATA>
        <PERSONALNO>3</PERSONALNO>
        <IT_RESULT>
           <item>
           </item>
        </IT_RESULT>
     </urn:ZFM_SAKTHI_EMP_LEAVE_DATA>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/", (req, res) => res.send("Employee Page"));

module.exports = router;
