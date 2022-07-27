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
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EYUWANKG_EMPLOYEE&receiverParty=&receiverService=&interface=SI_EYUWANKG_CUST_LOGIN&interfaceNamespace=http://eyuwankg_swankg.com`;
  //   "UserID":"EMPLOYEE@A1",
  //   "Password":"EYUWANKG123"
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_CUSTOMER_LOGIN_EYUWANKG>
        <!--You may enter the following 2 items in any order-->
        <PASSWORD>${req.body.Password}</PASSWORD>
        <USERNAME>${req.body.UserID}</USERNAME>
     </urn:ZFM_CUSTOMER_LOGIN_EYUWANKG>
  </soapenv:Body>
</soapenv:Envelope>`;
  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        console.log(
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_CUSTOMER_LOGIN_EYUWANKG.Response"
          ][0]
        );
        res.send({
          data: data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_CUSTOMER_LOGIN_EYUWANKG.Response"
          ][0],
        });
      });
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
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SAKTHI_EMP_PROFILE>
        <PERSONALNO>${req.body.employee_id}</PERSONALNO>
     </urn:ZFM_SAKTHI_EMP_PROFILE>
  </soapenv:Body>
</soapenv:Envelope>`;
  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_SAKTHI_EMP_PROFILE.Response"
          ][0]["P_RESULT_EXPORT"][0];
        var responseData = {};
        for (var item in tempData) {
          if (tempData[item][0] != "") responseData[item] = tempData[item][0];
        }
        res.send({
          data: { EmployeeDetails: responseData },
        });
      });
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
        <PERSONALNO>${req.body.employee_id}</PERSONALNO>
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
      xml2js.parseString(response.data, (err, data) => {
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_SAKTHI_FI_EMP_PAYROLL.Response"
          ][0]["IT_PAYROL_RESULT"][0];
        var responseData = [];
        if (tempData == "") res.send({ data: { PayrollDetails: tempData } });
        else {
          tempData = tempData["item"];
          for (var item in tempData) {
            var temp = {};
            for (var obj in tempData[item]) temp[obj] = tempData[item][obj][0];
            responseData.push(temp);
          }
          res.send({
            data: { PayrollDetails: responseData },
          });
        }
      });
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
        <PERSONALNO>${req.body.employee_id}</PERSONALNO>
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
      xml2js.parseString(response.data, (err, data) => {
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_SAKTHI_EMP_LEAVE_DATA.Response"
          ][0]["IT_RESULT"][0];
        var responseData = [];
        if (
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_SAKTHI_EMP_LEAVE_DATA.Response"
          ][0]["RETURN"][0]["TYPE"][0] == ""
        ) {
          tempData = tempData["item"];
          for (var item in tempData) {
            var temp = {};
            for (var obj in tempData[item]) temp[obj] = tempData[item][obj][0];
            responseData.push(temp);
          }
          res.send({
            data: { LeaveDataDetails: responseData },
          });
        } else res.send({ data: { LeaveDataDetails: "" } });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /employee_payslip
//@desc      route to get employee_payslip
//@access    PUBLIC
router.post("/employee_payslip", (req, res) => {
  console.log(req.body);

  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SAKTHI_SOAP_PIPO&receiverParty=&receiverService=&interface=SI_SAKTHI_EMP_PAYSLIP&interfaceNamespace=http://sakthi_pipo.com`;

  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SAKTHI_EMP_PAYSLIP>
        <PERSONALNO>${req.body.employee_id}</PERSONALNO>
        <SEQNO>${req.body.sequence_no}</SEQNO>
     </urn:ZFM_SAKTHI_EMP_PAYSLIP>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData = data["SOAP:Envelope"]["SOAP:Body"][0];
        var responseData = [];
        if (
          tempData["ns0:ZFM_SAKTHI_EMP_PAYSLIP.Response"][0]["RETURN"][0][
            "TYPE"
          ][0] == ""
        )
          res.send({
            data: {
              PDFDownloadURL:
                tempData["ns0:ZFM_SAKTHI_EMP_PAYSLIP.Response"][0][
                  "P_PAYSLIP_DOC"
                ][0],
            },
          });
        else res.send({ data: { PDFDownloadURL: "" } });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/", (req, res) => res.send("Employee Page"));

module.exports = router;
