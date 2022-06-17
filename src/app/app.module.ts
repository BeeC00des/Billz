import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DetailsFormComponent } from './details-form/details-form.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { DiscountComponent } from './discount/discount.component';
import { ReferralComponent } from './referral/referral.component';
import { SupportComponent } from './support/support.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsFormComponent,
    SideBarComponent,
    PaymentFormComponent,
    DiscountComponent,
    ReferralComponent,
    SupportComponent,
    MainComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
