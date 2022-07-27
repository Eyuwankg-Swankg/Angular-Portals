import {NgModule} from "@angular/core"
import { RouterModule,Routes } from "@angular/router"
const routes:Routes=[
  {
    path:"l",
    loadChildren:()=>import("./modules/Landing-Page/landing-page.module").then(m=>m.LandingPageModule)
  },
  {
    path:"d",
    loadChildren:()=>import("./modules/Customer Portal/customer-portal.module").then(m=>m.CustomerPortalModule)
  }
  ,
  {
    path:"vendor",
    loadChildren:()=>import("./modules/Vendor Portal/vendor-portal.module").then(m=>m.VendorPortalModule)
  }
  ,
  {
    path:"",
    loadChildren:()=>import("./modules/Employee Portal/employee-portal.module").then(m=>m.EmployeePortalModule)
  }

];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}