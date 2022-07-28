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
//@route     /vendorprofile
//@desc      route to get vendorprofile data
//@access    PUBLIC
router.post("/vendorprofile", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EYUWANKG_VENDOR_S&receiverParty=&receiverService=&interface=SI_EYUWANKG_VENDOR_PROFILE&interfaceNamespace=http://eyuwankg_vp.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VENDOR_PROFILE_EYUWANKG>
        <!--You may enter the following 3 items in any order-->
        <VENDOR_NO>${req.body.vendor_id}</VENDOR_NO>
        <!--Optional:-->
        <IT_BANKDETAIL>
           <!--Zero or more repetitions:-->
           <item>
              
           </item>
        </IT_BANKDETAIL>
        <!--Optional:-->
        <IT_VENDORIBANDETAIL>
           <!--Zero or more repetitions:-->
           <item>
            
           </item>
        </IT_VENDORIBANDETAIL>
     </urn:ZFM_VENDOR_PROFILE_EYUWANKG>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        res.send({ data: data });
      })
      
    })
    .catch(function (error) {
      console.log(error);
    });
});



//@type      POST
//@route     /quoterequestlist
//@desc      route to get quoterequestlist data
//@access    PUBLIC
router.post("/quoterequestlist", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EYUWANKG_VENDOR_S&receiverParty=&receiverService=&interface=SI_EYUWANKG_VENDOR_QUOTE_REQUEST_LIST&interfaceNamespace=http://eyuwankg_vp.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_QUOTE_REQUEST_LIST>
        <!--You may enter the following 2 items in any order-->
        <VENDOR_NO>${req.body.vendor_id}</VENDOR_NO>
        <!--Optional:-->
        <IT_QUOTE_REQUEST_LIST>
           <!--Zero or more repetitions:-->
           <item>
              
           </item>
        </IT_QUOTE_REQUEST_LIST>
     </urn:ZFM_QUOTE_REQUEST_LIST>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        res.send({ data: data });
      })
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /purchaseorderlist
//@desc      route to get purchaseorderlist data
//@access    PUBLIC
router.post("/purchaseorderlist", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EYUWANKG_VENDOR_S&receiverParty=&receiverService=&interface=SI_EYUWANKG_VENDOR_PURCHASE_ORDER_LIST&interfaceNamespace=http://eyuwankg_vp.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_PURCHASEORDER_LIST>
        <!--You may enter the following 4 items in any order-->
        <VENDOR_NO>${req.body.vendor_id}</VENDOR_NO>
        <!--Optional:-->
        <IT_PO_HEADERS>
           <!--Zero or more repetitions:-->
           <item>
              
           </item>
        </IT_PO_HEADERS>
        <!--Optional:-->
        <IT_PO_ITEMS>
           <!--Zero or more repetitions:-->
           <item>
             
           </item>
        </IT_PO_ITEMS>
        <!--Optional:-->
        <RETURN>
           <!--Zero or more repetitions:-->
           <item>
             
           </item>
        </RETURN>
     </urn:ZFM_PURCHASEORDER_LIST>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        res.send({ data: data });
      })
      
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /invoicelist
//@desc      route to get invoicelist data
//@access    PUBLIC
router.post("/invoicelist", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EYUWANKG_VENDOR_S&receiverParty=&receiverService=&interface=SI_EYUWANKG_VENDOR_INVOICE_LIST&interfaceNamespace=http://eyuwankg_vp.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_INVOICE_LIST_VENDOR>
        <!--You may enter the following 3 items in any order-->
        <VENDOR_NO>${req.body.vendor_id}</VENDOR_NO>
        <!--Optional:-->
        <IT_INVOICE_LIST>
           <!--Zero or more repetitions:-->
           <item>
             
           </item>
        </IT_INVOICE_LIST>
        <!--Optional:-->
        <RETURN>
           <!--Zero or more repetitions:-->
           <item>
              
           </item>
        </RETURN>
     </urn:ZFM_INVOICE_LIST_VENDOR>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        res.send({ data: data });
      });
      
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /goodslist
//@desc      route to get goodslist data
//@access    PUBLIC
router.post("/goodslist", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EYUWANKG_VENDOR_S&receiverParty=&receiverService=&interface=SI_EYUWANKG_VENDOR_GOODS_LIST&interfaceNamespace=http://eyuwankg_vp.com`;
  const bodyRequest = `
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZFM_GOODS_DETAIL_LIST>
         <!--You may enter the following 4 items in any order-->
         <VENDOR_NO>${req.body.vendor_id}</VENDOR_NO>
         <!--Optional:-->
         <IT_GOODSMVT_HEADER>
            <!--Zero or more repetitions:-->
            <item>
              
            </item>
         </IT_GOODSMVT_HEADER>
         <!--Optional:-->
         <IT_GOODSMVT_ITEMS>
            <!--Zero or more repetitions:-->
            <item>
               
            </item>
         </IT_GOODSMVT_ITEMS>
         <!--Optional:-->
         <RETURN>
            <!--Zero or more repetitions:-->
            <item>
               
            </item>
         </RETURN>
      </urn:ZFM_GOODS_DETAIL_LIST>
   </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        res.send({ data: data });
      });
      
    })
    .catch(function (error) {
      console.log(error);
    });
});


module.exports = router;
