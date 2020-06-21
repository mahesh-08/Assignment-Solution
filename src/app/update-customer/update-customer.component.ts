import { map } from 'rxjs/operators';
import { DataService } from './../data.service';
import { Customer } from './../interface/customer';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer: Customer
  updateForm: FormGroup
  states;
  index ;
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.customer = JSON.parse(params.data) as Customer;
    });
    this.dataService.getStates().subscribe(async states => {
      this.states = states;
    });

    this.updateForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      gender: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      email: new FormControl()
    });

    this.updateForm.patchValue({
      
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      gender: this.customer.gender,
      address: this.customer.address,
      city: this.customer.city,
      //state:  this.stateIndex(this.states,this.customer.state.name), //this.customer.state.name,
      state: 0,
      email: this.customer.email === undefined ? " " : this.customer.email
    });
    this.onChanges();
  }

  onChanges(): void {

    this.updateForm.valueChanges.subscribe(val => {
      this.customer.firstName = val.firstName;
      this.customer.lastName = val.lastName;
      this.customer.gender = val.gender;
      this.customer.address = val.address;
      this.customer.city = val.city;
      this.customer.state = this.states[val.state];
      this.customer.email = val.email;
    })
  }

  updateCustomerData() {
    this.dataService.updateCustomer(this.customer).subscribe();
    this.router.navigate(['/Customer']);
  }

  deleteCustomer() {
    this.dataService.deleteCustomer(this.customer.id).subscribe();
    this.router.navigate(['/Customer']);
  }
  cancel() {
    this.router.navigate(['/Customer']);
  }

  async stateIndex(states:{abbreviation:string,name:string}[],name:string) {
    return states.findIndex(i => i.name === name);
  }
}
