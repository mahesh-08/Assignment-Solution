import { DataService } from './../data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class RouterStub {
  navigate(param) {

  }
}

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  let mockDataService
  let order;
  let customers
  beforeEach(() => {
    order = [
      { "productName": "item1", "itemCost": 2 },
      { "productName": "item2", "itemCost": 2 },
      { "productName": "item3", "itemCost": 1 }
    ]

    customers = [
      {
        "id": 1,
        "firstName": "Ted",
        "lastName": "james",
        "gender": "male",
        "address": "1234 Anywhere St.",
        "city": " Phoenix ",
        "state": {
          "abbreviation": "AZ",
          "name": "Arizona"
        },
        "orders": [
          { "productName": "Basketball", "itemCost": 7.99 },
          { "productName": "Shoes", "itemCost": 199.99 }
        ],
        "latitude": 33.299,
        "longitude": -111.963
      },
      {
        "id": 2,
        "firstName": "Michelle",
        "lastName": "Thompson",
        "gender": "female",
        "address": "345 Cedar Point Ave.",
        "city": "Encinitas ",
        "state": {
          "abbreviation": "CA",
          "name": "California"
        },
        "orders": [
          { "productName": "Frisbee", "itemCost": 2.99 },
          { "productName": "Hat", "itemCost": 5.99 }
        ],
        "latitude": 33.037,
        "longitude": -117.291
      },
    ]

    mockDataService = jasmine.createSpyObj([
      'getAllCustomers'
    ])
    component = new CustomersComponent(mockDataService, null);
  });

  it('do nothing', () => {
    //expect(component).toBeTruthy();
    expect(true).toBe(true);
  });

  it('should return list of customers', () => {
    mockDataService.getAllCustomers.and.returnValue(of(customers))
    component.ngOnInit()
    //expect(component.customers.length).toBeGreaterThan(0)
    expect(component.customers.length).toBe(2)
  })

  it('should return total order cost', () => {
    let res
    res = component.orderTotal(order);
    expect(res).toBe(5);
  })
  it('should search customer from customer list', () => {
    component.customers = customers
    component.searchName = "Michelle"
    component.searchCustomer()
    expect(component.searchedCustomer.length).toBe(1);
  })

});
