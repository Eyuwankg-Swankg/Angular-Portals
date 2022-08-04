import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// ZFM_VENDOR_INVOICE_EXP
// ZFM_CUST_INVOICE_EXPORT
