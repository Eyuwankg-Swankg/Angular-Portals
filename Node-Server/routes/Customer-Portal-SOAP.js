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
//@route     /customerprofile
//@desc      route to get customerprofile data
//@access    PUBLIC
router.post("/customerprofile", (req, res) => {
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PRATHIP_SOAP&receiverParty=&receiverService=&interface=SI_PARA_PROFILE_DATA&interfaceNamespace=http://customer_portal.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_PROFILE_DATA_PM>
        <ID>12</ID>
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
     res.send({data:response.data});
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
       <CUSTOMER_ID>12</CUSTOMER_ID>
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
     res.send({data:response.data});
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
       <CUSTOMERNO>12</CUSTOMERNO>
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
     res.send({data:response.data});
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
        <CUSTOMERNO>12</CUSTOMERNO>
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
     res.send({data:response.data});
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
        <CUSTOMER_ID>12</CUSTOMER_ID>
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
     res.send({data:response.data});
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
        <CUSTOMERNO>12</CUSTOMERNO>
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
     res.send({data:response.data});
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
       <CUSTOMER_ID>12</CUSTOMER_ID>
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
     res.send({data:response.data});
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
       <CUSTOMER_ID>12</CUSTOMER_ID>
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
        res.send({data:response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/", (req, res) => res.send("Customer portal - SOAP"));

module.exports = router;
