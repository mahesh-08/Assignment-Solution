import { AddCustomerComponent } from './add-customer.component';
import { of, Observable, from } from 'rxjs';
//import 'rxjs/add/observable/from';

class RouterStub {
    navigate(param) {

    }
}

describe('Add Customer Component', () => {
    let component: AddCustomerComponent
    let mockDataService
    let customers
    let states
    beforeEach(() => {

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
        ];

        states = [
            {
                "abbreviation": "AZ",
                "name": "Arizona"
            },
            {
                "abbreviation": "CA",
                "name": "California"
            },
            {
                "abbreviation": "WA",
                "name": "Washington"
            },
        ];

        mockDataService = jasmine.createSpyObj([
            'getAllCustomers',
            'getStates',
            'addCustomer'
        ]);
        component = new AddCustomerComponent(null, mockDataService);
    })

    xit('should create a form with 7 controls', () => {
        //expect(component.addCustomer.contains('firstName')).toBeTruthy();
    })


    it('should add customer to the list', () => {
        //mockDataService.addCustomer.and.returnValue(of(true))
        mockDataService.getAllCustomers.and.returnValue(of(customers));
        mockDataService.getStates.and.returnValue(of(states));
        // spyOn(mockDataService,'getSates').and.callFake(()=>{
        //     return Observable.from([ states]);
        // });
        component.ngOnInit();
        //component.id = 1;
        component.addCustomerForm.setValue({
            firstName: 'John',
            lastName: 'Rambo',
            gender: 'male',
            address: '98756 Center St.',
            city: 'New York City',
            state: 'New York City',
            email: 'test@email.com'
        })
        //component.addCustomer();
        //expect(component.states.lenght).toBe(3);
        expect(component.id).toBe(3);
    })
    xit('should call addCustomer method', () => {
        mockDataService.addCustomer.and.returnValue(of(true))


        expect(mockDataService.addCustomer).toHaveBeenCalled()
    })
})