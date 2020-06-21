import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerComponent } from './update-customer.component';
import { of } from 'rxjs';

describe('UpdateCustomerComponent', () => {
    let component: UpdateCustomerComponent;
    let fixture: ComponentFixture<UpdateCustomerComponent>;
    let mockDataService
    let updateComponent: UpdateCustomerComponent
    let customers
    beforeEach(async(() => {

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
            'getAllCustomers',
            'getStates',
            'deleteCustomer',
            'updateCustomer'
        ])
        updateComponent = new UpdateCustomerComponent(null, null, mockDataService);

    }));

    xit('should delete customer from the list', () => {
        mockDataService.deleteCustomer.and.returnValue(of(true))
        updateComponent.customer = {
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

            ],
            "latitude": 33.299,
            "longitude": -111.963,
            email: "ted@email.com"
        }
        updateComponent.deleteCustomer()
        expect(mockDataService.deleteCustomer).toHaveBeenCalled();
    })


});
