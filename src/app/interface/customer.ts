
export class Customer{
    id : number;
    firstName : string;
    lastName : string;
    gender : string;
    email : string;
    address : string;
    city : string;
    state : {abbreviation:string,name:string};
    orders : [{productName:string,itemCost:number}];
    latitude : Number
    longitude : Number 
}