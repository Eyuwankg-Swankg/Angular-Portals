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
  //   "UserID":"VENDOR@A1",
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
        var tempData =
          data["SOAP:Envelope"]["SOAP:Body"][0][
            "ns0:ZFM_VENDOR_PROFILE_EYUWANKG.Response"
          ][0];
        var responseData = {};
        for (var item in tempData) {
          if (item != "$" && item != "RETURN") {
            var tempObj = {};
            for (var key in tempData[item][0]) {
              if (key == "item") {
                for (inner in tempData[item][0][key][0]){
                  if(tempData[item][0][key][0][inner][0]!="")
                    tempObj[inner] = tempData[item][0][key][0][inner][0];
                }
              } else {
                if(tempData[item][0][key][0]!="")
                  tempObj[key] = tempData[item][0][key][0];
              }
            }
            if(tempObj!={})
              responseData[item] = tempObj;
          }
        }
        res.send({ data: responseData });
      });
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
        var tempData=data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_QUOTE_REQUEST_LIST.Response"][0]["IT_QUOTE_REQUEST_LIST"][0];
        if(tempData!=""){
          tempData=tempData["item"];
          var responseData=[];
          for(var item of tempData){
            var tempObj={}
            for(var key in item){
              tempObj[key]=item[key][0];
            }
            responseData.push(tempObj)
          }
          res.send({ data: responseData});
        }
        else{
          res.send({data:"NO DATA"});
        }
        
      });
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
        var tempData=data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_PURCHASEORDER_LIST.Response"][0]["IT_PO_ITEMS"][0];
        if(tempData!=""){
          tempData=tempData["item"];
          var responseData=[];
          for(var item of tempData){
            var tempObj={}
            for(var key in item){
              tempObj[key]=item[key][0];
            }
            responseData.push(tempObj)
          }
          res.send({ data: responseData});
        }
        else{
          res.send({data:"NO DATA"});
        }
      });
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
        var tempData=data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_INVOICE_LIST_VENDOR.Response"][0]["IT_INVOICE_LIST"][0];
        // res.send(data["SOAP:Envelope"]["SOAP:Body"][0]);
        if(tempData!=""){
          tempData=tempData["item"];
          var responseData=[];
          for(var item of tempData){
            var tempObj={}
            for(var key in item){
              tempObj[key]=item[key][0];
            }
            responseData.push(tempObj)
          }
          res.send({ data: responseData});
        }
        else{
          res.send({data:"NO DATA"})
        }
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
        var tempData=data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_GOODS_DETAIL_LIST.Response"][0]["IT_GOODSMVT_ITEMS"][0];
        //  res.send(data["SOAP:Envelope"]["SOAP:Body"][0]);
        if(data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_GOODS_DETAIL_LIST.Response"][0]["RETURN"][0]==""){
          tempData=tempData["item"];
          var responseData=[];
          for(var item of tempData){
            var tempObj={}
            for(var key in item){
              tempObj[key]=item[key][0];
            }
            responseData.push(tempObj)
          }
          res.send({ data: responseData});
        }
        else{
          res.send({data:"NO DATA"})
        }
    })
  })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /debit
//@desc      route to get debit data
//@access    PUBLIC
router.post("/debit", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SAKTHI_SOAP_PIPO&receiverParty=&receiverService=&interface=SI_SAKTHI_VP_DEBIT&interfaceNamespace=http://sakthi_pipo.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_FI_VENDOR_DEBIT>
        <VENDOR_NO>${req.body.vendor_id}</VENDOR_NO>
        <ET_LINEITEM>
           <item>
           </item>
        </ET_LINEITEM>
     </urn:ZFM_FI_VENDOR_DEBIT>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData=data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_FI_VENDOR_DEBIT.Response"][0]["ET_LINEITEM"][0];
        //res.send(data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_FI_VENDOR_DEBIT.Response"][0]);
        if(data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_FI_VENDOR_DEBIT.Response"][0]["RETURN"][0]["TYPE"][0]==''){
          tempData=tempData["item"];
          var responseData=[];
          for(var item of tempData){
            var tempObj={}
            for(var key in item){
              tempObj[key]=item[key][0];
            }
            responseData.push(tempObj)
          }
          res.send({ data: responseData});
        }
        else{
          res.send({data:"NO DATA"})
        }
    })
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /credit
//@desc      route to get credit data
//@access    PUBLIC
router.post("/credit", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SAKTHI_SOAP_PIPO&receiverParty=&receiverService=&interface=SI_SAKTHII_VP_CREDIT&interfaceNamespace=http://sakthi_pipo.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_FI_VENDOR_CREDIT>
        <VENDOR_NO>${req.body.vendor_id}</VENDOR_NO>
        <ET_LINEITEM>
           <item>
           </item>
        </ET_LINEITEM>
     </urn:ZFM_FI_VENDOR_CREDIT>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData=data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_FI_VENDOR_CREDIT.Response"][0]["ET_LINEITEM"][0];
        // res.send(data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_FI_VENDOR_CREDIT.Response"][0]);
        if(data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_FI_VENDOR_CREDIT.Response"][0]["RETURN"][0]["TYPE"][0]==''){
          tempData=tempData["item"];
          var responseData=[];
          for(var item of tempData){
            var tempObj={}
            for(var key in item){
              tempObj[key]=item[key][0];
            }
            responseData.push(tempObj)
          }
          res.send({ data: responseData});
        }
        else{
          res.send({data:"NO DATA"})
        }
    })
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /vendorpay
//@desc      route to get vendorpay data
//@access    PUBLIC
router.post("/vendorpay", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SAKTHI_SOAP_PIPO&receiverParty=&receiverService=&interface=SI_SAKTHI_VENDOR_PAYAGE&interfaceNamespace=http://sakthi_pipo.com`;
  const bodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_FI_VENDOR_PAYAGE>
        <VENDOR_NO>${req.body.vendor_id}</VENDOR_NO>
        <IT_LINEITEM>
           <item>
           </item>
        </IT_LINEITEM>
     </urn:ZFM_FI_VENDOR_PAYAGE>
  </soapenv:Body>
</soapenv:Envelope>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      xml2js.parseString(response.data, (err, data) => {
        var tempData=data["SOAP:Envelope"]["SOAP:Body"][0]["ns0:ZFM_FI_VENDOR_PAYAGE.Response"][0]["IT_LINEITEM"][0];
        if(tempData!=""){
          tempData=tempData["item"];
          var responseData=[];
          for(var item of tempData){
            var tempObj={}
            for(var key in item){
              tempObj[key]=item[key][0];
            }
            responseData.push(tempObj)
          }
          res.send({ data: responseData});
        }
        else{
          res.send({data:"NO DATA"})
        }
    })
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
