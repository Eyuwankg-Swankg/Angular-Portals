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
//   "UserID":"VENDOR@A1",
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
//@route     /vendorprofile
//@desc      route to get vendorprofile data
//@access    PUBLIC
router.post("/vendorprofile", (req, res) => {
  console.log(req.body);
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

//@type      POST
//@route     /vendorpay
//@desc      route to get vendorpay data
//@access    PUBLIC
router.post("/vendorpay", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eyuwankg_vendor_pay`;
  const bodyRequest = `<?xml version="1.0" encoding="UTF-8"?>
  <ns0:ZFM_VENDOR_PAY xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
  <VENDOR_NO>MOHANRAJ</VENDOR_NO>
     <IT_PAY>
        <item>
           <COMP_CODE/>
           <VENDOR/>
           <SP_GL_IND/>
           <CLEAR_DATE/>
           <CLR_DOC_NO/>
           <ALLOC_NMBR/>
           <FISC_YEAR/>
           <DOC_NO/>
           <ITEM_NUM/>
           <PSTNG_DATE/>
           <DOC_DATE/>
           <ENTRY_DATE/>
           <CURRENCY/>
           <LOC_CURRCY/>
           <REF_DOC_NO/>
           <DOC_TYPE/>
           <FIS_PERIOD/>
           <POST_KEY/>
           <DB_CR_IND/>
           <BUS_AREA/>
           <TAX_CODE/>
           <LC_AMOUNT/>
           <AMT_DOCCUR/>
           <LC_TAX/>
           <TX_DOC_CUR/>
           <ITEM_TEXT/>
           <BRANCH/>
           <BLINE_DATE/>
           <PMNTTRMS/>
           <DSCT_DAYS1/>
           <DSCT_DAYS2/>
           <NETTERMS/>
           <DSCT_PCT1/>
           <DSCT_PCT2/>
           <DISC_BASE/>
           <DSC_AMT_LC/>
           <DSC_AMT_DC/>
           <PYMT_METH/>
           <PMNT_BLOCK/>
           <FIXEDTERMS/>
           <INV_REF/>
           <INV_YEAR/>
           <INV_ITEM/>
           <DUNN_BLOCK/>
           <DUNN_KEY/>
           <LAST_DUNN/>
           <DUNN_LEVEL/>
           <DUNN_AREA/>
           <W_TAX_CODE/>
           <W_TAX_BASE/>
           <WI_TAX_AMT/>
           <DOC_STATUS/>
           <NXT_DOCTYP/>
           <VAT_REG_NO/>
           <EXEMPT_NO/>
           <W_TAX_EXPT/>
           <REASON_CDE/>
           <PMTMTHSUPL/>
           <REF_KEY_1/>
           <REF_KEY_2/>
           <T_CURRENCY/>
           <AMOUNT/>
           <NET_AMOUNT/>
           <NAME/>
           <NAME_2/>
           <NAME_3/>
           <NAME_4/>
           <POSTL_CODE/>
           <CITY/>
           <COUNTRY/>
           <STREET/>
           <PO_BOX/>
           <POBX_PCD/>
           <POBK_CURAC/>
           <BANK_ACCT/>
           <BANK_KEY/>
           <BANK_CTRY/>
           <TAX_NO_1/>
           <TAX_NO_2/>
           <TAX/>
           <EQUAL_TAX/>
           <REGION/>
           <CTRL_KEY/>
           <INSTR_KEY/>
           <PAYEE_CODE/>
           <LANGU/>
           <BILL_LIFE/>
           <BE_TAXCODE/>
           <BILLTAX_LC/>
           <BILLTAX_FC/>
           <LC_COL_CHG/>
           <COLL_CHARG/>
           <CHGS_TX_CD/>
           <ISSUE_DATE/>
           <USAGEDATE/>
           <BILL_USAGE/>
           <DOMICILE/>
           <DRAWER/>
           <CTRBNK_LOC/>
           <DRAW_CITY1/>
           <DRAWEE/>
           <DRAW_CITY2/>
           <DISCT_DAYS/>
           <DISCT_RATE/>
           <ACCEPTED/>
           <BILLSTATUS/>
           <PRTEST_IND/>
           <BE_DEMAND/>
           <OBJ_TYPE/>
           <REF_DOC/>
           <REF_ORG_UN/>
           <REVERSAL_DOC/>
           <SP_GL_TYPE/>
           <NEG_POSTNG/>
           <REF_DOC_NO_LONG/>
        </item>
     </IT_PAY>
  </ns0:ZFM_VENDOR_PAY>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send({ data: response.data });
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
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eyuwankg_vendor_quote_request_list`;
  const bodyRequest = `<?xml version="1.0" encoding="UTF-8"?>
  <ns0:ZFM_QUOTE_REQUEST_LIST xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
  <VENDOR_NO>5</VENDOR_NO>
     <IT_QUOTE_REQUEST_LIST>
        <item>
           <MANDT/>
           <EBELN/>
           <BUKRS/>
           <BSTYP/>
           <BSART/>
           <BSAKZ/>
           <LOEKZ/>
           <STATU/>
           <AEDAT/>
           <ERNAM/>
           <PINCR/>
           <LPONR/>
           <LIFNR/>
           <SPRAS/>
           <ZTERM/>
           <ZBD1T/>
           <ZBD2T/>
           <ZBD3T/>
           <ZBD1P/>
           <ZBD2P/>
           <EKORG/>
           <EKGRP/>
           <WAERS/>
           <WKURS/>
           <KUFIX/>
           <BEDAT/>
           <KDATB/>
           <KDATE/>
           <BWBDT/>
           <ANGDT/>
           <BNDDT/>
           <GWLDT/>
           <AUSNR/>
           <ANGNR/>
           <IHRAN/>
           <IHREZ/>
           <VERKF/>
           <TELF1/>
           <LLIEF/>
           <KUNNR/>
           <KONNR/>
           <ABGRU/>
           <AUTLF/>
           <WEAKT/>
           <RESWK/>
           <LBLIF/>
           <INCO1/>
           <INCO2/>
           <KTWRT/>
           <SUBMI/>
           <KNUMV/>
           <KALSM/>
           <STAFO/>
           <LIFRE/>
           <EXNUM/>
           <UNSEZ/>
           <LOGSY/>
           <UPINC/>
           <STAKO/>
           <FRGGR/>
           <FRGSX/>
           <FRGKE/>
           <FRGZU/>
           <FRGRL/>
           <LANDS/>
           <LPHIS/>
           <ADRNR/>
           <STCEG_L/>
           <STCEG/>
           <ABSGR/>
           <ADDNR/>
           <KORNR/>
           <MEMORY/>
           <PROCSTAT/>
           <RLWRT/>
           <REVNO/>
           <SCMPROC/>
           <REASON_CODE/>
           <MEMORYTYPE/>
           <RETTP/>
           <RETPC/>
           <DPTYP/>
           <DPPCT/>
           <DPAMT/>
           <DPDAT/>
           <MSR_ID/>
           <HIERARCHY_EXISTS/>
           <THRESHOLD_EXISTS/>
           <LEGAL_CONTRACT/>
           <DESCRIPTION/>
           <RELEASE_DATE/>
           <VSART/>
           <HANDOVERLOC/>
           <SHIPCOND/>
           <INCOV/>
           <INCO2_L/>
           <INCO3_L/>
           <FORCE_ID/>
           <FORCE_CNT/>
           <RELOC_ID/>
           <RELOC_SEQ_ID/>
           <SOURCE_LOGSYS/>
           <FSH_TRANSACTION/>
           <FSH_ITEM_GROUP/>
           <FSH_VAS_LAST_ITEM/>
           <FSH_OS_STG_CHANGE/>
           <REF1/>
           <VZSKZ/>
           <FSH_SNST_STATUS/>
           <POHF_TYPE/>
           <EQ_EINDT/>
           <EQ_WERKS/>
           <FIXPO/>
           <EKGRP_ALLOW/>
           <WERKS_ALLOW/>
           <CONTRACT_ALLOW/>
           <PSTYP_ALLOW/>
           <FIXPO_ALLOW/>
           <KEY_ID_ALLOW/>
           <AUREL_ALLOW/>
           <DELPER_ALLOW/>
           <EINDT_ALLOW/>
           <LTSNR_ALLOW/>
           <OTB_LEVEL/>
           <OTB_COND_TYPE/>
           <KEY_ID/>
           <OTB_VALUE/>
           <OTB_CURR/>
           <OTB_RES_VALUE/>
           <OTB_SPEC_VALUE/>
           <SPR_RSN_PROFILE/>
           <BUDG_TYPE/>
           <OTB_STATUS/>
           <OTB_REASON/>
           <CHECK_TYPE/>
           <CON_OTB_REQ/>
           <CON_PREBOOK_LEV/>
           <CON_DISTR_LEV/>
           <CURR_DATE/>
        </item>
     </IT_QUOTE_REQUEST_LIST>
  </ns0:ZFM_QUOTE_REQUEST_LIST>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send({ data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /quoterequestdetail
//@desc      route to get quoterequestdetail data
//@access    PUBLIC
router.post("/quoterequestdetail", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eyuwankg_vendor_quote_request_detail`;
  const bodyRequest = `<?xml version="1.0" encoding="UTF-8"?>
  <ns0:ZFM_QUOTE_REQUEST_DETAIL xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
  <REQUEST_DOC_NO>6000000003</REQUEST_DOC_NO>
     <QUOTE_REQUEST_DETAIL>
        <item>
           <MANDT/>
           <EBELN/>
           <EBELP/>
           <LOEKZ/>
           <STATU/>
           <AEDAT/>
           <TXZ01/>
           <MATNR/>
           <EMATN/>
           <BUKRS/>
           <WERKS/>
           <LGORT/>
           <BEDNR/>
           <MATKL/>
           <INFNR/>
           <IDNLF/>
           <KTMNG/>
           <MENGE/>
           <MEINS/>
           <BPRME/>
           <BPUMZ/>
           <BPUMN/>
           <UMREZ/>
           <UMREN/>
           <NETPR/>
           <PEINH/>
           <NETWR/>
           <BRTWR/>
           <AGDAT/>
           <WEBAZ/>
           <MWSKZ/>
           <BONUS/>
           <INSMK/>
           <SPINF/>
           <PRSDR/>
           <SCHPR/>
           <MAHNZ/>
           <MAHN1/>
           <MAHN2/>
           <MAHN3/>
           <UEBTO/>
           <UEBTK/>
           <UNTTO/>
           <BWTAR/>
           <BWTTY/>
           <ABSKZ/>
           <AGMEM/>
           <ELIKZ/>
           <EREKZ/>
           <PSTYP/>
           <KNTTP/>
           <KZVBR/>
           <VRTKZ/>
           <TWRKZ/>
           <WEPOS/>
           <WEUNB/>
           <REPOS/>
           <WEBRE/>
           <KZABS/>
           <LABNR/>
           <KONNR/>
           <KTPNR/>
           <ABDAT/>
           <ABFTZ/>
           <ETFZ1/>
           <ETFZ2/>
           <KZSTU/>
           <NOTKZ/>
           <LMEIN/>
           <EVERS/>
           <ZWERT/>
           <NAVNW/>
           <ABMNG/>
           <PRDAT/>
           <BSTYP/>
           <EFFWR/>
           <XOBLR/>
           <KUNNR/>
           <ADRNR/>
           <EKKOL/>
           <SKTOF/>
           <STAFO/>
           <PLIFZ/>
           <NTGEW/>
           <GEWEI/>
           <TXJCD/>
           <ETDRK/>
           <SOBKZ/>
           <ARSNR/>
           <ARSPS/>
           <INSNC/>
           <SSQSS/>
           <ZGTYP/>
           <EAN11/>
           <BSTAE/>
           <REVLV/>
           <GEBER/>
           <FISTL/>
           <FIPOS/>
           <KO_GSBER/>
           <KO_PARGB/>
           <KO_PRCTR/>
           <KO_PPRCTR/>
           <MEPRF/>
           <BRGEW/>
           <VOLUM/>
           <VOLEH/>
           <INCO1/>
           <INCO2/>
           <VORAB/>
           <KOLIF/>
           <LTSNR/>
           <PACKNO/>
           <FPLNR/>
           <GNETWR/>
           <STAPO/>
           <UEBPO/>
           <LEWED/>
           <EMLIF/>
           <LBLKZ/>
           <SATNR/>
           <ATTYP/>
           <VSART/>
           <HANDOVERLOC/>
           <KANBA/>
           <ADRN2/>
           <CUOBJ/>
           <XERSY/>
           <EILDT/>
           <DRDAT/>
           <DRUHR/>
           <DRUNR/>
           <AKTNR/>
           <ABELN/>
           <ABELP/>
           <ANZPU/>
           <PUNEI/>
           <SAISO/>
           <SAISJ/>
           <EBON2/>
           <EBON3/>
           <EBONF/>
           <MLMAA/>
           <MHDRZ/>
           <ANFNR/>
           <ANFPS/>
           <KZKFG/>
           <USEQU/>
           <UMSOK/>
           <BANFN/>
           <BNFPO/>
           <MTART/>
           <UPTYP/>
           <UPVOR/>
           <KZWI1/>
           <KZWI2/>
           <KZWI3/>
           <KZWI4/>
           <KZWI5/>
           <KZWI6/>
           <SIKGR/>
           <MFZHI/>
           <FFZHI/>
           <RETPO/>
           <AUREL/>
           <BSGRU/>
           <LFRET/>
           <MFRGR/>
           <NRFHG/>
           <J_1BNBM/>
           <J_1BMATUSE/>
           <J_1BMATORG/>
           <J_1BOWNPRO/>
           <J_1BINDUST/>
           <ABUEB/>
           <NLABD/>
           <NFABD/>
           <KZBWS/>
           <BONBA/>
           <FABKZ/>
           <J_1AINDXP/>
           <J_1AIDATEP/>
           <MPROF/>
           <EGLKZ/>
           <KZTLF/>
           <KZFME/>
           <RDPRF/>
           <TECHS/>
           <CHG_SRV/>
           <CHG_FPLNR/>
           <MFRPN/>
           <MFRNR/>
           <EMNFR/>
           <NOVET/>
           <AFNAM/>
           <TZONRC/>
           <IPRKZ/>
           <LEBRE/>
           <BERID/>
           <XCONDITIONS/>
           <APOMS/>
           <CCOMP/>
           <GRANT_NBR/>
           <FKBER/>
           <STATUS/>
           <RESLO/>
           <KBLNR/>
           <KBLPOS/>
           <WEORA/>
           <SRV_BAS_COM/>
           <PRIO_URG/>
           <PRIO_REQ/>
           <EMPST/>
           <DIFF_INVOICE/>
           <TRMRISK_RELEVANT/>
           <SPE_ABGRU/>
           <SPE_CRM_SO/>
           <SPE_CRM_SO_ITEM/>
           <SPE_CRM_REF_SO/>
           <SPE_CRM_REF_ITEM/>
           <SPE_CRM_FKREL/>
           <SPE_CHNG_SYS/>
           <SPE_INSMK_SRC/>
           <SPE_CQ_CTRLTYPE/>
           <SPE_CQ_NOCQ/>
           <REASON_CODE/>
           <CQU_SAR/>
           <ANZSN/>
           <SPE_EWM_DTC/>
           <EXLIN/>
           <EXSNR/>
           <EHTYP/>
           <RETPC/>
           <DPTYP/>
           <DPPCT/>
           <DPAMT/>
           <DPDAT/>
           <FLS_RSTO/>
           <EXT_RFX_NUMBER/>
           <EXT_RFX_ITEM/>
           <EXT_RFX_SYSTEM/>
           <SRM_CONTRACT_ID/>
           <SRM_CONTRACT_ITM/>
           <BLK_REASON_ID/>
           <BLK_REASON_TXT/>
           <ITCONS/>
           <FIXMG/>
           <WABWE/>
           <CMPL_DLV_ITM/>
           <INCO2_L/>
           <INCO3_L/>
           <TC_AUT_DET/>
           <MANUAL_TC_REASON/>
           <FISCAL_INCENTIVE/>
           <TAX_SUBJECT_ST/>
           <FISCAL_INCENTIVE_ID/>
           <SF_TXJCD/>
           <_-BEV1_-NEGEN_ITEM/>
           <_-BEV1_-NEDEPFREE/>
           <_-BEV1_-NESTRUCCAT/>
           <ADVCODE/>
           <BUDGET_PD/>
           <EXCPE/>
           <FMFGUS_KEY/>
           <IUID_RELEVANT/>
           <MRPIND/>
           <SGT_SCAT/>
           <SGT_RCAT/>
           <WRF_CHARSTC1/>
           <WRF_CHARSTC2/>
           <WRF_CHARSTC3/>
           <REFSITE/>
           <SERRU/>
           <SERNP/>
           <DISUB_SOBKZ/>
           <DISUB_PSPNR/>
           <DISUB_KUNNR/>
           <DISUB_VBELN/>
           <DISUB_POSNR/>
           <DISUB_OWNER/>
           <FSH_SEASON_YEAR/>
           <FSH_SEASON/>
           <FSH_COLLECTION/>
           <FSH_THEME/>
           <FSH_ATP_DATE/>
           <FSH_VAS_REL/>
           <FSH_VAS_PRNT_ID/>
           <FSH_TRANSACTION/>
           <FSH_ITEM_GROUP/>
           <FSH_ITEM/>
           <FSH_SS/>
           <FSH_GRID_COND_REC/>
           <FSH_PSM_PFM_SPLIT/>
           <CNFM_QTY/>
           <REF_ITEM/>
           <SOURCE_ID/>
           <SOURCE_KEY/>
           <PUT_BACK/>
           <POL_ID/>
           <CONS_ORDER/>
        </item>
     </QUOTE_REQUEST_DETAIL>
  </ns0:ZFM_QUOTE_REQUEST_DETAIL>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send({ data: response.data });
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
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eyuwankg_vendor_purchase_order_list`;
  const bodyRequest = `<?xml version="1.0" encoding="UTF-8"?>
  <ns0:ZFM_PURCHASEORDER_LIST xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
  <VENDOR_NO>MOHANRAJ</VENDOR_NO>
     <IT_PO_HEADERS>
        <item>
           <PO_NUMBER/>
           <CO_CODE/>
           <DOC_CAT/>
           <DOC_TYPE/>
           <CNTRL_IND/>
           <DELETE_IND/>
           <STATUS/>
           <CREATED_ON/>
           <CREATED_BY/>
           <ITEM_INTVL/>
           <LAST_ITEM/>
           <VENDOR/>
           <LANGUAGE/>
           <PMNTTRMS/>
           <DSCNT1_TO/>
           <DSCNT2_TO/>
           <DSCNT3_TO/>
           <CASH_DISC1/>
           <CASH_DISC2/>
           <PURCH_ORG/>
           <PUR_GROUP/>
           <CURRENCY/>
           <EXCH_RATE/>
           <EX_RATE_FX/>
           <DOC_DATE/>
           <VPER_START/>
           <VPER_END/>
           <APPLIC_BY/>
           <QUOT_DEAD/>
           <BINDG_PER/>
           <WARRANTY/>
           <BIDINV_NO/>
           <QUOTATION/>
           <QUOT_DATE/>
           <REF_1/>
           <SALES_PERS/>
           <TELEPHONE/>
           <SUPPL_VEND/>
           <CUSTOMER/>
           <AGREEMENT/>
           <REJ_REASON/>
           <COMPL_DLV/>
           <GR_MESSAGE/>
           <SUPPL_PLNT/>
           <RCVG_VEND/>
           <INCOTERMS1/>
           <INCOTERMS2/>
           <TARGET_VAL/>
           <COLL_NO/>
           <DOC_COND/>
           <PROCEDURE/>
           <UPDATE_GRP/>
           <DIFF_INV/>
           <EXPORT_NO/>
           <OUR_REF/>
           <LOGSYSTEM/>
           <SUBITEMINT/>
           <MAST_COND/>
           <REL_GROUP/>
           <REL_STRAT/>
           <REL_IND/>
           <REL_STATUS/>
           <SUBJ_TO_R/>
           <TAXR_CNTRY/>
           <SCHED_IND/>
           <VEND_NAME/>
           <CURRENCY_ISO/>
           <EXCH_RATE_CM/>
           <HOLD/>
        </item>
     </IT_PO_HEADERS>
     <IT_PO_ITEMS>
        <item>
           <PO_NUMBER/>
           <PO_ITEM/>
           <ADDRESS/>
           <MATERIAL/>
           <PUR_MAT/>
           <INFO_REC/>
           <ITEM_CAT/>
           <ACCTASSCAT/>
           <AGREEMENT/>
           <AGMT_ITEM/>
           <STORE_LOC/>
           <MAT_GRP/>
           <SHORT_TEXT/>
           <DISTRIB/>
           <PART_INV/>
           <KANBAN_IND/>
           <PLANT/>
           <ALLOC_TBL/>
           <AT_ITEM/>
           <UNIT/>
           <NET_PRICE/>
           <PRICE_UNIT/>
           <CONV_NUM1/>
           <CONV_DEN1/>
           <ORDERPR_UN/>
           <PCKG_NO/>
           <PROMOTION/>
           <ACKN_REQD/>
           <TRACKINGNO/>
           <PLAN_DEL/>
           <RET_ITEM/>
           <AT_RELEV/>
           <VEND_MAT/>
           <MANUF_PROF/>
           <MANU_MAT/>
           <MFR_NO/>
           <MFR_NO_EXT/>
           <PO_PRICE/>
           <SHIPPING/>
           <ITEM_CAT_EXT/>
           <PO_UNIT_ISO/>
           <ORDERPR_UN_ISO/>
           <PREQ_NAME/>
           <DISP_QUAN/>
           <QUAL_INSP/>
           <NO_MORE_GR/>
           <DELETE_IND/>
           <NO_ROUNDING/>
           <TAX_CODE/>
           <MATERIAL_EXTERNAL/>
           <MATERIAL_GUID/>
           <MATERIAL_VERSION/>
           <PUR_MAT_EXTERNAL/>
           <PUR_MAT_GUID/>
           <PUR_MAT_VERSION/>
           <VAL_TYPE/>
           <PR_CLOSED/>
           <ACKNOWL_NO/>
           <REQ_SEGMENT/>
           <STK_SEGMENT/>
           <MATERIAL_LONG/>
           <PUR_MAT_LONG/>
        </item>
     </IT_PO_ITEMS>
     <RETURN>
        <item>
           <TYPE/>
           <CODE/>
           <MESSAGE/>
           <LOG_NO/>
           <LOG_MSG_NO/>
           <MESSAGE_V1/>
           <MESSAGE_V2/>
           <MESSAGE_V3/>
           <MESSAGE_V4/>
        </item>
     </RETURN>
  </ns0:ZFM_PURCHASEORDER_LIST>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send({ data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});

//@type      POST
//@route     /purchaseorderdetail
//@desc      route to get purchaseorderdetail data
//@access    PUBLIC
router.post("/purchaseorderdetail", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eyuwankg_vendor_purchase_order_detail`;
  const bodyRequest = `<?xml version="1.0" encoding="UTF-8"?>
  <ns0:ZFM_PURCHASEORDER_DETAIL xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
  <PURCHASE_DOC_NO>4200000000</PURCHASE_DOC_NO>
     <PURCHASE_ORDER_DETAIL>
        <item>
           <PO_NUMBER/>
           <PO_ITEM/>
           <DELETE_IND/>
           <STATUS/>
           <CHANGED_ON/>
           <SHORT_TEXT/>
           <MATERIAL/>
           <PUR_MAT/>
           <CO_CODE/>
           <PLANT/>
           <STORE_LOC/>
           <TRACKINGNO/>
           <MAT_GRP/>
           <INFO_REC/>
           <VEND_MAT/>
           <TARGET_QTY/>
           <QUANTITY/>
           <UNIT/>
           <ORDERPR_UN/>
           <CONV_NUM1/>
           <CONV_DEN1/>
           <CONV_NUM2/>
           <CONV_DEN2/>
           <NET_PRICE/>
           <PRICE_UNIT/>
           <NET_VALUE/>
           <GROS_VALUE/>
           <QUOT_DEAD/>
           <GR_PR_TIME/>
           <TAX_CODE/>
           <SETT_GRP1/>
           <QUAL_INSP/>
           <INFO_UPD/>
           <PRNT_PRICE/>
           <EST_PRICE/>
           <NUM_REMIND/>
           <REMINDER1/>
           <REMINDER2/>
           <REMINDER3/>
           <OVERDELTOL/>
           <UNLIMITED/>
           <UNDER_TOL/>
           <VAL_TYPE/>
           <VAL_CAT/>
           <REJ_IND/>
           <COMMENT/>
           <DEL_COMPL/>
           <FINAL_INV/>
           <ITEM_CAT/>
           <ACCTASSCAT/>
           <CONSUMPT/>
           <DISTRIB/>
           <PART_INV/>
           <GR_IND/>
           <GR_NON_VAL/>
           <IR_IND/>
           <GR_BASEDIV/>
           <ACKN_REQD/>
           <ACKNOWL_NO/>
           <AGREEMENT/>
           <AGMT_ITEM/>
           <RECON_DATE/>
           <AGRCUMQTY/>
           <FIRM_ZONE/>
           <TRADE_OFF/>
           <BOM_EXPL/>
           <EXCLUSION/>
           <BASE_UNIT/>
           <SHIPPING/>
           <OUTL_TARGV/>
           <NOND_ITAX/>
           <RELORD_QTY/>
           <PRICE_DATE/>
           <DOC_CAT/>
           <EFF_VALUE/>
           <COMMITMENT/>
           <CUSTOMER/>
           <ADDRESS/>
           <COND_GROUP/>
           <NO_C_DISC/>
           <UPDATE_GRP/>
           <PLAN_DEL/>
           <NET_WEIGHT/>
           <WEIGHTUNIT/>
           <TAX_JUR_CD/>
           <PRINT_REL/>
           <SPEC_STOCK/>
           <SETRESERNO/>
           <SETTLITMNO/>
           <NOT_CHGBL/>
           <CTR_KEY_QM/>
           <CERT_TYPE/>
           <EAN_UPC/>
           <CONF_CTRL/>
           <REV_LEV/>
           <FUND/>
           <FUNDS_CTR/>
           <CMMT_ITEM/>
           <BA_PARTNER/>
           <PTR_ASS_BA/>
           <PROFIT_CTR/>
           <PARTNER_PC/>
           <PRICE_CTR/>
           <GROSS_WGHT/>
           <VOLUME/>
           <VOLUMEUNIT/>
           <INCOTERMS1/>
           <INCOTERMS2/>
           <ADVANCE/>
           <PRIOR_VEND/>
           <SUB_RANGE/>
           <PCKG_NO/>
           <STATISTIC/>
           <HL_ITEM/>
           <GR_TO_DATE/>
           <SUPPL_VEND/>
           <SC_VENDOR/>
           <CONF_MATL/>
           <MAT_CAT/>
           <KANBAN_IND/>
           <ADDRESS2/>
           <INT_OBJ_NO/>
           <ERS/>
           <GRSETTFROM/>
           <LAST_TRANS/>
           <TRANS_TIME/>
           <SER_NO/>
           <PROMOTION/>
           <ALLOC_TBL/>
           <AT_ITEM/>
           <POINTS/>
           <POINTS_UN/>
           <SEASON_TY/>
           <SEASON_YR/>
           <SETT_GRP_2/>
           <SETT_GRP_3/>
           <SETT_ITEM/>
           <ML_AKT/>
           <REMSHLIFE/>
           <RFQ/>
           <RFQ_ITEM/>
           <CONFIG_ORG/>
           <QUOTAUSAGE/>
           <SPSTCK_PHY/>
           <PREQ_NO/>
           <PREQ_ITEM/>
           <MAT_TYPE/>
           <SI_CAT/>
           <SUB_ITEMS/>
           <SUBTOTAL_1/>
           <SUBTOTAL_2/>
           <SUBTOTAL_3/>
           <SUBTOTAL_4/>
           <SUBTOTAL_5/>
           <SUBTOTAL_6/>
           <SUBITM_KEY/>
           <MAX_CMG/>
           <MAX_CPGO/>
           <RET_ITEM/>
           <AT_RELEV/>
           <ORD_REAS/>
           <DEL_TYP_RT/>
           <PRDTE_CTRL/>
           <MANUF_PROF/>
           <MANU_MAT/>
           <MFR_NO/>
           <MFR_NO_EXT/>
           <ITEM_CAT_EXT/>
           <PO_UNIT_ISO/>
           <ORDERPR_UN_ISO/>
           <BASE_UOM_ISO/>
           <WEIGHTUNIT_ISO/>
           <VOLUMEUNIT_ISO/>
           <POINTS_UN_ISO/>
           <CONF_MATL_EXTERNAL/>
           <CONF_MATL_GUID/>
           <CONF_MATL_VERSION/>
           <MATERIAL_EXTERNAL/>
           <MATERIAL_GUID/>
           <MATERIAL_VERSION/>
           <PUR_MAT_EXTERNAL/>
           <PUR_MAT_GUID/>
           <PUR_MAT_VERSION/>
           <GRANT_NBR/>
           <CMMT_ITEM_LONG/>
           <FUNC_AREA_LONG/>
           <BUDGET_PERIOD/>
           <MATERIAL_LONG/>
           <PUR_MAT_LONG/>
           <CONF_MATL_LONG/>
        </item>
     </PURCHASE_ORDER_DETAIL>
     <RETURN>
        <item>
           <TYPE/>
           <CODE/>
           <MESSAGE/>
           <LOG_NO/>
           <LOG_MSG_NO/>
           <MESSAGE_V1/>
           <MESSAGE_V2/>
           <MESSAGE_V3/>
           <MESSAGE_V4/>
        </item>
     </RETURN>
  </ns0:ZFM_PURCHASEORDER_DETAIL>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send({ data: response.data });
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
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eyuwankg_vendor_invoice_list`;
  const bodyRequest = `<?xml version="1.0" encoding="UTF-8"?>
  <ns0:ZFM_INVOICE_LIST_VENDOR xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
  <VENDOR_NO>MOHANRAJ</VENDOR_NO>
     <IT_INVOICE_LIST>
        <item>
           <INV_DOC_NO/>
           <FISC_YEAR/>
           <PSTNG_DATE/>
           <DOC_DATE/>
           <ENTRY_DATE/>
           <ENTRY_TIME/>
           <COMP_CODE/>
           <GROSS_AMNT/>
           <CURRENCY/>
           <CURRENCY_ISO/>
           <DIFF_INV/>
           <REF_DOC_NO/>
           <HEADER_TXT/>
           <PERSON_EXT/>
           <INVOICE_STATUS/>
           <REF_DOC_NO_LONG/>
           <TM_DOCUMENT/>
           <INV_TRAN_/>
        </item>
     </IT_INVOICE_LIST>
     <RETURN>
        <item>
           <TYPE/>
           <ID/>
           <NUMBER/>
           <MESSAGE/>
           <LOG_NO/>
           <LOG_MSG_NO/>
           <MESSAGE_V1/>
           <MESSAGE_V2/>
           <MESSAGE_V3/>
           <MESSAGE_V4/>
           <PARAMETER/>
           <ROW/>
           <FIELD/>
           <SYSTEM/>
        </item>
     </RETURN>
  </ns0:ZFM_INVOICE_LIST_VENDOR>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send({ data: response.data });
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
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eyuwankg_vendor_goods_list`;
  const bodyRequest = `<?xml version="1.0" encoding="UTF-8"?>
  <ns0:ZFM_GOODS_DETAIL_LIST xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
  <VENDOR_NO>MOHANRAJ</VENDOR_NO>
     <IT_GOODSMVT_HEADER>
        <item>
           <MAT_DOC/>
           <DOC_YEAR/>
           <TR_EV_TYPE/>
           <DOC_DATE/>
           <PSTNG_DATE/>
           <ENTRY_DATE/>
           <ENTRY_TIME/>
           <USERNAME/>
           <VER_GR_GI_SLIP/>
           <EXPIMP_NO/>
           <REF_DOC_NO/>
           <HEADER_TXT/>
           <REF_DOC_NO_LONG/>
        </item>
     </IT_GOODSMVT_HEADER>
     <IT_GOODSMVT_ITEMS>
        <item>
           <MAT_DOC/>
           <DOC_YEAR/>
           <MATDOC_ITM/>
           <MATERIAL/>
           <PLANT/>
           <STGE_LOC/>
           <BATCH/>
           <MOVE_TYPE/>
           <STCK_TYPE/>
           <SPEC_STOCK/>
           <VENDOR/>
           <CUSTOMER/>
           <SALES_ORD/>
           <S_ORD_ITEM/>
           <SCHED_LINE/>
           <VAL_TYPE/>
           <ENTRY_QNT/>
           <ENTRY_UOM/>
           <ENTRY_UOM_ISO/>
           <PO_PR_QNT/>
           <ORDERPR_UN/>
           <ORDERPR_UN_ISO/>
           <PO_NUMBER/>
           <PO_ITEM/>
           <SHIPPING/>
           <COMP_SHIP/>
           <NO_MORE_GR/>
           <ITEM_TEXT/>
           <GR_RCPT/>
           <UNLOAD_PT/>
           <COSTCENTER/>
           <ORDERID/>
           <ORDER_ITNO/>
           <CALC_MOTIVE/>
           <ASSET_NO/>
           <SUB_NUMBER/>
           <RESERV_NO/>
           <RES_ITEM/>
           <RES_TYPE/>
           <WITHDRAWN/>
           <MOVE_MAT/>
           <MOVE_PLANT/>
           <MOVE_STLOC/>
           <MOVE_BATCH/>
           <MOVE_VAL_TYPE/>
           <MVT_IND/>
           <MOVE_REAS/>
           <RL_EST_KEY/>
           <REF_DATE/>
           <COST_OBJ/>
           <PROFIT_SEGM_NO/>
           <PROFIT_CTR/>
           <WBS_ELEM/>
           <NETWORK/>
           <ACTIVITY/>
           <PART_ACCT/>
           <AMOUNT_LC/>
           <AMOUNT_SV/>
           <CURRENCY/>
           <CURRENCY_ISO/>
           <REF_DOC_YR/>
           <REF_DOC/>
           <REF_DOC_IT/>
           <EXPIRYDATE/>
           <PROD_DATE/>
           <FUND/>
           <FUNDS_CTR/>
           <CMMT_ITEM/>
           <VAL_SALES_ORD/>
           <VAL_S_ORD_ITEM/>
           <VAL_WBS_ELEM/>
           <CO_BUSPROC/>
           <ACTTYPE/>
           <SUPPL_VEND/>
           <X_AUTO_CRE/>
           <MATERIAL_EXTERNAL/>
           <MATERIAL_GUID/>
           <MATERIAL_VERSION/>
           <MOVE_MAT_EXTERNAL/>
           <MOVE_MAT_GUID/>
           <MOVE_MAT_VERSION/>
           <GRANT_NBR/>
           <CMMT_ITEM_LONG/>
           <FUNC_AREA_LONG/>
           <LINE_ID/>
           <PARENT_ID/>
           <LINE_DEPTH/>
           <BUDGET_PERIOD/>
           <EARMARKED_NUMBER/>
           <EARMARKED_ITEM/>
           <STK_SEGMENT/>
           <MATERIAL_LONG/>
           <MOVE_MAT_LONG/>
        </item>
     </IT_GOODSMVT_ITEMS>
     <RETURN>
        <item>
           <TYPE/>
           <ID/>
           <NUMBER/>
           <MESSAGE/>
           <LOG_NO/>
           <LOG_MSG_NO/>
           <MESSAGE_V1/>
           <MESSAGE_V2/>
           <MESSAGE_V3/>
           <MESSAGE_V4/>
           <PARAMETER/>
           <ROW/>
           <FIELD/>
           <SYSTEM/>
        </item>
     </RETURN>
  </ns0:ZFM_GOODS_DETAIL_LIST>`;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send({ data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});


//@type      POST
//@route     /goodsdetail
//@desc      route to get goodsdetail data
//@access    PUBLIC
router.post("/goodsdetail", (req, res) => {
  console.log(req.body);
  const requestURL = `http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eyuwankg_vendor_goods_list`;
  const bodyRequest = ``;

  axios
    .post(requestURL, bodyRequest, config)
    .then(function (response) {
      res.send({ data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});


module.exports = router;
