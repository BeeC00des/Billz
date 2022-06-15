import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFormComponent } from './details-form/details-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';


const routes: Routes = [
  { path:'Details', component: DetailsFormComponent},
  { path:'Payment', component:PaymentFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
