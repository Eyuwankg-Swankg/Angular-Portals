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
//@route     /customerprofile
//@desc      route to get customerprofile data
//@access    PUBLIC
router.post("/customerprofile", (req, res) => {
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PRATHIP_SOAP&receiverParty=&receiverService=&interface=SI_PARA_PROFILE_DATA&interfaceNamespace=http://customer_portal.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_PROFILE_DATA_PM>
        <ID>${req.body.customer_id}</ID>
        <CUSTOMERBANKDETAIL>
           <item>
           </item>
        </CUSTOMERBANKDETAIL>
        <CUSTOMERIBANDETAIL>
           <item>
           </item>
        </CUSTOMERIBANDETAIL>
        <CUSTOMERSEPADETAIL>
           <item>
           </item>
        </CUSTOMERSEPADETAIL>
     </urn:ZFM_PROFILE_DATA_PM>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_PROFILE_DATA_PM.Response"
          ][0];
        var responseData = {};
        for (var item in tempData) {
          if (item != "$" && item != "RETURN") {
            var tempObj = {};
            // console.log(tempData[item][0]);
            if (tempData[item][0] != "") {
              for (var value in tempData[item][0]) {
                if (tempData[item][0][value][0] != "")
                  tempObj[value] = tempData[item][0][value][0];
              }
            }
            if (Object.keys(tempObj).length > 1) responseData[item] = tempObj;
          }
        }
        res.send({
          data: responseData,
        });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// INQUIRY DATA

//@type      POST
//@route     /inquiryList
//@desc      route to get inquiryList data
//@access    PUBLIC
router.post("/inquiryList", (req, res) => {
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PRATHIP_SOAP&receiverParty=&receiverService=&interface=SI_PARA_INQUIRY_LIST&interfaceNamespace=http://customer_portal.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
 <soapenv:Header/>
 <soapenv:Body>
    <urn:ZFM_INQUIRY_LIST_SD_PM>
       <!--You may enter the following 2 items in any order-->
       <CUSTOMER_ID>${req.body.customer_id}</CUSTOMER_ID>
       <IT_INQUIRY_LIST>
          <!--Zero or more repetitions:-->
          <item>
          </item>
       </IT_INQUIRY_LIST>
    </urn:ZFM_INQUIRY_LIST_SD_PM>
 </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_INQUIRY_LIST_SD_PM.Response"
          ][0]["IT_INQUIRY_LIST"][0];
        var responseData = {};
        if (tempData != "") {
          tempData = tempData["item"];
          var responseData = [];
          for (var item of tempData) {
            var tempObj = {};
            for (var key in item) {
              tempObj[key] = item[key][0];
            }
            responseData.push(tempObj);
          }
          res.send({ data: responseData });
        } else {
          res.send({ data: "NO DATA" });
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// SALES DATA

//@type      POST
//@route     /saleorderlist
//@desc      route to get saleorderlist data
//@access    PUBLIC
router.post("/saleorderlist", (req, res) => {
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PRATHIP_SOAP&receiverParty=&receiverService=&interface=SI_PARA_SALES_ORDER_DATA&interfaceNamespace=http://customer_portal.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
 <soapenv:Header/>
 <soapenv:Body>
    <urn:ZFM_SALES_ORDER_DATA_PM>
       <!--You may enter the following 2 items in any order-->
       <CUSTOMERNO>${req.body.customer_id}</CUSTOMERNO>
       <!--Optional:-->
       <IT_SALES_ORDER>
          <!--Zero or more repetitions:-->
          <item>
          </item>
       </IT_SALES_ORDER>
    </urn:ZFM_SALES_ORDER_DATA_PM>
 </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_SALES_ORDER_DATA_PM.Response"
          ][0]["IT_SALES_ORDER"][0];
        //   res.send(tempData);
        var responseData = {};
        if (tempData != "") {
          tempData = tempData["item"];
          var responseData = [];
          for (var item of tempData) {
            var tempObj = {};
            for (var key in item) {
              tempObj[key] = item[key][0];
            }
            responseData.push(tempObj);
          }
          res.send({ data: responseData });
        } else {
          res.send({ data: "NO DATA" });
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// INVOICE DATA

//@type      POST
//@route     /invoicelist
//@desc      route to get invoicelist data
//@access    PUBLIC
router.post("/invoicelist", (req, res) => {
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SAKTHI_SOAP_PIPO&receiverParty=&receiverService=&interface=SI_SAKTHI_CP_SD_INVOICE_LIST&interfaceNamespace=http://sakthi-cp-pipo.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SD_INVOICE_LIST_CP>
        <CUSTOMERNO>${req.body.customer_id}</CUSTOMERNO>
        <IT_INVOICE_LIST>
           <item>
           </item>
        </IT_INVOICE_LIST>
     </urn:ZFM_SD_INVOICE_LIST_CP>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_SD_INVOICE_LIST_CP.Response"
          ][0]["IT_INVOICE_LIST"][0];
        // res.send(tempData);
        var responseData = {};
        if (tempData != "") {
          tempData = tempData["item"];
          var responseData = [];
          for (var item of tempData) {
            var tempObj = {};
            for (var key in item) {
              tempObj[key] = item[key][0];
            }
            responseData.push(tempObj);
          }
          res.send({ data: responseData });
        } else {
          res.send({ data: "NO DATA" });
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// DELIVERY DATA

//@type      POST
//@route     /deliverylist
//@desc      route to get deliverylist data
//@access    PUBLIC
router.post("/deliverylist", (req, res) => {
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PRATHIP_SOAP&receiverParty=&receiverService=&interface=SI_PARA_DELIVERY_LIST&interfaceNamespace=http://customer_portal.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_SD_DELIVERY_LIST_PM>
        <!--You may enter the following 4 items in any order-->
        <CUSTOMER_ID>${req.body.customer_id}</CUSTOMER_ID>
        <!--Optional:-->
        <RESULT_DELIVERY_HEADER>
           <!--Zero or more repetitions:-->
           <item>
             
           </item>
        </RESULT_DELIVERY_HEADER>
        <!--Optional:-->
        <RESULT_DELIVERY_ITEM>
           <!--Zero or more repetitions:-->
           <item>
           
           </item>
        </RESULT_DELIVERY_ITEM>
        <!--Optional:-->
        <RETURN>
           <!--Zero or more repetitions:-->
           <item>
             
           </item>
        </RETURN>
     </urn:ZFM_SD_DELIVERY_LIST_PM>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_SD_DELIVERY_LIST_PM.Response"
          ][0]["RESULT_DELIVERY_ITEM"][0];
        // res.send(tempData);
        var responseData = {};
        tempData = tempData["item"];
        var responseData = [];
        for (var item of tempData) {
          var tempObj = {};
          for (var key in item) {
            tempObj[key] = item[key][0];
          }
          responseData.push(tempObj);
        }
        res.send({ data: responseData });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// FINANCIAL SHEET

//@type      POST
//@route     /paymentaging
//@desc      route to get paymentaging data
//@access    PUBLIC
router.post("/paymentaging", (req, res) => {
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SAKTHI_SOAP_PIPO&receiverParty=&receiverService=&interface=SI_SAKTHI_PAYMENT_AGING&interfaceNamespace=http://sakthi-cp-pipo.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_PAYMENT_AND_AGING>
        <CUSTOMERNO>${req.body.customer_id}</CUSTOMERNO>
        <IT_LINEITEM>
           <item>
              
           </item>
        </IT_LINEITEM>
     </urn:ZFM_PAYMENT_AND_AGING>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_PAYMENT_AND_AGING.Response"
          ][0]["IT_LINEITEM"][0];
        //res.send(tempData);
        var responseData = {};
        if (tempData != "") {
          tempData = tempData["item"];
          var responseData = [];
          for (var item of tempData) {
            var tempObj = {};
            for (var key in item) {
              tempObj[key] = item[key][0];
            }
            responseData.push(tempObj);
          }
          res.send({ data: responseData });
        } else {
          res.send({ data: "NO DATA" });
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /debitmemo
//@desc      route to get debitmemo data
//@access    PUBLIC
router.post("/debitmemo", (req, res) => {
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SAKTHI_SOAP_PIPO&receiverParty=&receiverService=&interface=SI_SAKTHI_CP_DEBIT_MEMO&interfaceNamespace=http://sakthi-cp-pipo.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
 <soapenv:Header/>
 <soapenv:Body>
    <urn:ZFM_FI_DEBIT_MEMO_CP>
       <CUSTOMER_ID>${req.body.customer_id}</CUSTOMER_ID>
       <IT_DEBIT_RESULT>
          <item>
          </item>
       </IT_DEBIT_RESULT>
    </urn:ZFM_FI_DEBIT_MEMO_CP>
 </soapenv:Body>
</soapenv:Envelope>`;
  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_FI_DEBIT_MEMO_CP.Response"
          ][0];
        //  res.send(tempData);
        var responseData = {};
        if (tempData["RETURN"][0]["TYPE"][0] == "") {
          tempData = tempData["IT_DEBIT_RESULT"][0]["item"];
          var responseData = [];
          for (var item of tempData) {
            var tempObj = {};
            for (var key in item) {
              tempObj[key] = item[key][0];
            }
            responseData.push(tempObj);
          }
          res.send({ data: responseData });
        } else {
          res.send({ data: "NO DATA" });
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /creditmemo
//@desc      route to get creditmemo data
//@access    PUBLIC
router.post("/creditmemo", (req, res) => {
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SAKTHI_SOAP_PIPO&receiverParty=&receiverService=&interface=SI_SAKTHI_CP_CREDIT_DEMO&interfaceNamespace=http://sakthi-cp-pipo.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
 <soapenv:Header/>
 <soapenv:Body>
    <urn:ZFM_FI_CREDIT_MEMO_CP>
       <CUSTOMER_ID>${req.body.customer_id}</CUSTOMER_ID>
       <IT_CREDIT_RESULT>
          <item>
          </item>
       </IT_CREDIT_RESULT>
    </urn:ZFM_FI_CREDIT_MEMO_CP>
 </soapenv:Body>
</soapenv:Envelope>`;
  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_FI_CREDIT_MEMO_CP.Response"
          ][0];
        //  res.send(tempData);
        var responseData = {};
        if (tempData["RETURN"][0]["TYPE"][0] == "") {
          tempData = tempData["IT_CREDIT_RESULT"][0]["item"];
          var responseData = [];
          for (var item of tempData) {
            var tempObj = {};
            for (var key in item) {
              tempObj[key] = item[key][0];
            }
            responseData.push(tempObj);
          }
          res.send({ data: responseData });
        } else {
          res.send({ data: "NO DATA" });
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/", (req, res) => res.send("Customer portal - SOAP"));

module.exports = router;
