import { DataService } from './../data.service';
import { Customer } from './../interface/customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  id: number
  addCustomerForm: FormGroup
  states;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {

    this.addCustomerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      email: new FormControl()
    });

    this.dataService.getAllCustomers()
      .subscribe(
        customer => {
          this.id = customer.length + 1
        }
      );

    this.dataService.getStates().subscribe(states => {
      this.states = states;
    });
  }

  addCustomer() {
    let customer: Customer
    customer = this.addCustomerForm.value
    customer.id = this.id
    customer.state = this.states[this.addCustomerForm.controls.state.value]
    this.dataService.addCustomer(customer).subscribe();
    this.router.navigate(['/Customer']);
  }

  cancel() {
    this.router.navigate(['/Customer']);
  }
}
