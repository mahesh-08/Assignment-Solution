import { Customer } from './../interface/customer';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  customers: Customer[];
  searchedCustomer: Customer[];
  searchName: string;

  ngOnInit(): void {
    this.dataService.getAllCustomers()
      .subscribe(
        customer => {
          this.customers = customer;
          this.searchedCustomer = this.customers
        }
      );

  }

  addCustomer() {
    this.router.navigate(['/addcustomer']);
  }

  updateCustomer() {
    this.router.navigate(['/updateCustomer']);
  }

  orderTotal(order: { productName: string, itemCost: number }[]) {
    if (order == null || order == undefined)
      return 0;
    let totalOrderCost: number = 0;
    for (let i = 0; i < order.length; i++) {
      totalOrderCost += order[i].itemCost;
    }
    return totalOrderCost;
  }

  searchCustomer() {
    if (this.searchName) {
      this.searchedCustomer = this.customers.filter((customer) =>
        customer.firstName.toLocaleLowerCase().includes(this.searchName.toLocaleLowerCase()));
    }
    else {
      this.searchedCustomer = this.customers
    }
  }
}
