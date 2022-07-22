import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-customer-inquiry',
  templateUrl: './customer-inquiry.component.html',
  styleUrls: ['./customer-inquiry.component.css'],
})
export class CustomerInquiryComponent implements OnInit {
  InquiryList = [{ABDIS: "",
  ​​
  ABHOB: "00:00:00",
  ​​
  ABHOD: "00000-00-00",
  ​​
  ABHOV: "00:00:00",
  ​​
  ABRUF_PART: "",
  ​​
  ABRVW: "",
  ​​
  AEDAT: "00000-00-00",
  ​​
  AGRZR: "00",
  ​​
  AMTBL: 0,
  ​​
  ANGDT: "2022-06-08",
  ​​
  AUART: "AF",
  ​​
  AUDAT: "2022-06-08",
  ​​
  AUFNR: "",
  ​​
  AUGRU: "",
  ​​
  AUTLF: "",
  ​​
  AWAHR: "030",
  ​​
  BETC: "",
  ​​
  BNAME: "",
  ​​
  BNDDT: "2022-12-01",
  ​​
  BPN: "",
  ​​
  BSARK: "",
  ​​
  BSTDK: "00000-00-00",
  ​​
  BSTNK: "samplE INV 1",
  ​​
  BSTZD: "",
  ​​
  BUKRS_VF: "0001",
  ​​
  CANCEL_ALLOW: "",
  ​​
  CMFRE: "00000-00-00",
  ​​
  CMNGV: "00000-00-00",
  ​​
  CMNUP: "00000-00-00",
  ​​
  CMWAE: "",
  ​​
  CONT_DG: "",
  ​​
  CRM_GUID: "",
  ​​
  CTLPC: "",
  ​​
  DAT_FZAU: "00000-00-00",
  ​​
  ENQUEUE_GRP: "",
  ​​
  ERDAT: "2022-06-08",
  ​​
  ERNAM: "ABAPER1",
  ​​
  ERZET: "11:11:46",
  ​​
  FAKSK: "",
  ​​
  FKARA: "",
  ​​
  FMBDAT: "2022-06-08",
  ​​
  FSH_CANDATE: "00000-00-00",
  ​​
  FSH_CQ_CHECK: "",
  ​​
  FSH_KVGR10: "",
  ​​
  FSH_KVGR6: "",
  ​​
  FSH_KVGR7: "",
  ​​
  FSH_KVGR8: "",
  ​​
  FSH_KVGR9: "",
  ​​
  FSH_OS_STG_CHANGE: "",
  ​​
  FSH_REREG: "",
  ​​
  FSH_SS: "",
  ​​
  FSH_TRANSACTION: "",
  ​​
  FSH_VAS_CG: "",
  ​​
  FSH_VRSN_STATUS: "",
  ​​
  GRUPP: "",
  ​​
  GSBER: "",
  ​​
  GSKST: "",
  ​​
  GUEBG: "00000-00-00",
  ​​
  GUEEN: "00000-00-00",
  ​​
  GWLDT: "00000-00-00",
  ​​
  HANDLE: "}L7GBNcX7jovtRNXDWuVmm",
  ​​
  HANDOVERLOC: "",
  ​​
  HB_CONT_REASON: "",
  ​​
  HB_EXPDATE: "00000-00-00",
  ​​
  HB_RESDATE: "00000-00-00",
  ​​
  HITYP_PR: "",
  ​​
  IHREZ: "",
  ​​
  KALCD: "",
  ​​
  KALSM: "RVAA01",
  ​​
  KALSM_CH: "",
  ​​
  KKBER: "",
  ​​
  KNKLI: "",
  ​​
  KNUMA: "",
  ​​
  KNUMV: "0000003208",
  ​​
  KOKRS: "0001",
  ​​
  KOSTL: "",
  ​​
  KTEXT: "",
  ​​
  KUNNR: "0000000012",
  ​​
  KURST: "",
  ​​
  KVGR1: "",
  ​​
  KVGR2: "",
  ​​
  KVGR3: "",
  ​​
  KVGR4: "",
  ​​
  KVGR5: "",
  ​​
  LANDTX: "",
  ​​
  LIFSK: "",
  ​​
  LOGSYSB: "",
  ​​
  MAHDT: "00000-00-00",
  ​​
  MAHZA: 0,
  ​​
  MANDT: 100,
  ​​
  MILL_APPL_ID: "",
  ​​
  MOD_ALLOW: "",
  ​​
  MSR_ID: "",
  ​​
  MTLAUR: "",
  ​​
  MULTI: "",
  ​​
  NETWR: "260.00",
  ​​
  OBJNR: "",
  ​​
  PAY_METHOD: "",
  ​​
  PHASE: "",
  ​​
  PROLI: "",
  ​​
  PSM_BUDAT: "00000-00-00",
  ​​
  PS_PSP_PNR: "00000000",
  ​​
  QMNUM: "",
  ​​
  REP_FREQ: "",
  ​​
  RPLNR: "",
  ​​
  SBGRP: "",
  ​​
  SCHEME_GRP: "",
  ​​
  SMENR: "",
  ​​
  SPART: "01",
  ​​
  SPPAYM: "",
  ​​
  STAFO: "",
  ​​
  STAGE: 0,
  ​​
  STCEG_L: "DE",
  ​​
  STWAE: "EUR",
  ​​
  SUBMI: "",
  ​​
  SWENR: "",
  ​​
  TAS: "",
  ​​
  TAXK1: 1,
  ​​
  TAXK2: "",
  ​​
  TAXK3: "",
  ​​
  TAXK4: "",
  ​​
  TAXK5: "",
  ​​
  TAXK6: "",
  ​​
  TAXK7: "",
  ​​
  TAXK8: "",
  ​​
  TAXK9: "",
  ​​
  TELF1: "",
  ​​
  TM_CTRL_KEY: "",
  ​​
  TRVOG: 1,
  ​​
  UPD_TMSTMP: 0,
  ​​
  VBELN: "0010000007",
  ​​
  VBELN_GRP: "",
  ​​
  VBKLA: "",
  ​​
  VBKLT: "",
  ​​
  VBTYP: "A",
  ​​
  VDATU: "2022-06-08",
  ​​
  VGBEL: "",
  ​​
  VGTYP: "",
  ​​
  VKBUR: "0001",
  ​​
  VKGRP: "",
  ​​
  VKORG: "0001",
  ​​
  VPRGR: 1,
  ​​
  VSBED: "01",
  ​​
  VSNMR_V: "",
  ​​
  VTWEG: "01",
  ​​
  VZEIT: "00:00:00",
  ​​
  WAERK: "EUR",
  ​​
  WTYSC_CLM_HDR: "",
  ​​
  XBLNR: "",
  ​​
  XEGDR: "",
  ​​
  ZUONR: "",
  ​​
  _DATAAGING: "00000-00-00",},{ABDIS: "",
  ​​
  ABHOB: "00:00:00",
  ​​
  ABHOD: "00000-00-00",
  ​​
  ABHOV: "00:00:00",
  ​​
  ABRUF_PART: "",
  ​​
  ABRVW: "",
  ​​
  AEDAT: "00000-00-00",
  ​​
  AGRZR: "00",
  ​​
  AMTBL: 0,
  ​​
  ANGDT: "00000-00-00",
  ​​
  AUART: "AF",
  ​​
  AUDAT: "2022-06-08",
  ​​
  AUFNR: "",
  ​​
  AUGRU: "",
  ​​
  AUTLF: "",
  ​​
  AWAHR: "030",
  ​​
  BETC: "",
  ​​
  BNAME: "",
  ​​
  BNDDT: "00000-00-00",
  ​​
  BPN: "",
  ​​
  BSARK: "",
  ​​
  BSTDK: "00000-00-00",
  ​​
  BSTNK: "samplE INV 2",
  ​​
  BSTZD: "",
  ​​
  BUKRS_VF: "0001",
  ​​
  CANCEL_ALLOW: "",
  ​​
  CMFRE: "00000-00-00",
  ​​
  CMNGV: "00000-00-00",
  ​​
  CMNUP: "00000-00-00",
  ​​
  CMWAE: "",
  ​​
  CONT_DG: "",
  ​​
  CRM_GUID: "",
  ​​
  CTLPC: "",
  ​​
  DAT_FZAU: "00000-00-00",
  ​​
  ENQUEUE_GRP: "",
  ​​
  ERDAT: "2022-06-08",
  ​​
  ERNAM: "ABAPER1",
  ​​
  ERZET: "11:13:50",
  ​​
  FAKSK: "",
  ​​
  FKARA: "",
  ​​
  FMBDAT: "2022-06-08",
  ​​
  FSH_CANDATE: "00000-00-00",
  ​​
  FSH_CQ_CHECK: "",
  ​​
  FSH_KVGR10: "",
  ​​
  FSH_KVGR6: "",
  ​​
  FSH_KVGR7: "",
  ​​
  FSH_KVGR8: "",
  ​​
  FSH_KVGR9: "",
  ​​
  FSH_OS_STG_CHANGE: "",
  ​​
  FSH_REREG: "",
  ​​
  FSH_SS: "",
  ​​
  FSH_TRANSACTION: "",
  ​​
  FSH_VAS_CG: "",
  ​​
  FSH_VRSN_STATUS: "",
  ​​
  GRUPP: "",
  ​​
  GSBER: "",
  ​​
  GSKST: "",
  ​​
  GUEBG: "00000-00-00",
  ​​
  GUEEN: "00000-00-00",
  ​​
  GWLDT: "00000-00-00",
  ​​
  HANDLE: "}L7GBNcX7jovtRyJm4PVqW",
  ​​
  HANDOVERLOC: "",
  ​​
  HB_CONT_REASON: "",
  ​​
  HB_EXPDATE: "00000-00-00",
  ​​
  HB_RESDATE: "00000-00-00",
  ​​
  HITYP_PR: "",
  ​​
  IHREZ: "",
  ​​
  KALCD: "",
  ​​
  KALSM: "RVAA01",
  ​​
  KALSM_CH: "",
  ​​
  KKBER: "",
  ​​
  KNKLI: "",
  ​​
  KNUMA: "",
  ​​
  KNUMV: "0000003209",
  ​​
  KOKRS: "0001",
  ​​
  KOSTL: "",
  ​​
  KTEXT: "",
  ​​
  KUNNR: "0000000012",
  ​​
  KURST: "",
  ​​
  KVGR1: "",
  ​​
  KVGR2: "",
  ​​
  KVGR3: "",
  ​​
  KVGR4: "",
  ​​
  KVGR5: "",
  ​​
  LANDTX: "",
  ​​
  LIFSK: "",
  ​​
  LOGSYSB: "",
  ​​
  MAHDT: "00000-00-00",
  ​​
  MAHZA: 0,
  ​​
  MANDT: 100,
  ​​
  MILL_APPL_ID: "",
  ​​
  MOD_ALLOW: "",
  ​​
  MSR_ID: "",
  ​​
  MTLAUR: "",
  ​​
  MULTI: "",
  ​​
  NETWR: "130.00",
  ​​
  OBJNR: "",
  ​​
  PAY_METHOD: "",
  ​​
  PHASE: "",
  ​​
  PROLI: "",
  ​​
  PSM_BUDAT: "00000-00-00",
  ​​
  PS_PSP_PNR: "00000000",
  ​​
  QMNUM: "",
  ​​
  REP_FREQ: "",
  ​​
  RPLNR: "",
  ​​
  SBGRP: "",
  ​​
  SCHEME_GRP: "",
  ​​
  SMENR: "",
  ​​
  SPART: "01",
  ​​
  SPPAYM: "",
  ​​
  STAFO: "",
  ​​
  STAGE: 0,
  ​​
  STCEG_L: "DE",
  ​​
  STWAE: "EUR",
  ​​
  SUBMI: "",
  ​​
  SWENR: "",
  ​​
  TAS: "",
  ​​
  TAXK1: 1,
  ​​
  TAXK2: "",
  ​​
  TAXK3: "",
  ​​
  TAXK4: "",
  ​​
  TAXK5: "",
  ​​
  TAXK6: "",
  ​​
  TAXK7: "",
  ​​
  TAXK8: "",
  ​​
  TAXK9: "",
  ​​
  TELF1: "",
  ​​
  TM_CTRL_KEY: "",
  ​​
  TRVOG: 1,
  ​​
  UPD_TMSTMP: 0,
  ​​
  VBELN: "0010000008",
  ​​
  VBELN_GRP: "",
  ​​
  VBKLA: "",
  ​​
  VBKLT: "",
  ​​
  VBTYP: "A",
  ​​
  VDATU: "2022-06-08",
  ​​
  VGBEL: "",
  ​​
  VGTYP: "",
  ​​
  VKBUR: "0001",
  ​​
  VKGRP: "",
  ​​
  VKORG: "0001",
  ​​
  VPRGR: 1,
  ​​
  VSBED: "01",
  ​​
  VSNMR_V: "",
  ​​
  VTWEG: "01",
  ​​
  VZEIT: "00:00:00",
  ​​
  WAERK: "EUR",
  ​​
  WTYSC_CLM_HDR: "",
  ​​
  XBLNR: "",
  ​​
  XEGDR: "",
  ​​
  ZUONR: "",
  ​​
  _DATAAGING: "00000-00-00",}];
  customerDetails = {
    customer_id: '12',
  };
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    // ID: "0000000012"\
    console.log("Inquiry Data",this.InquiryList);
    this.customerService
      .getInquiryData(this.customerDetails)
      .subscribe((responseData) => {
        console.log("Inquiry Data",responseData);
        // this.InquiryList = responseData;
      });
  }
}