import { CustomersComponent } from './customers/customers.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'Customer',
    component: CustomersComponent
  },
  {
    path: 'addcustomer',
    component: AddCustomerComponent
  },
  {
    path: 'updateCustomer',
    component: UpdateCustomerComponent
  },
  {
    path: '**',
    component: CustomersComponent
  },
  {
    path: '',
    redirectTo: '/Customer',pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
