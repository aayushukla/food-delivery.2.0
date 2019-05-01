import { Component } from '@angular/core';

@Component({
    templateUrl: "./welcome.component.html",
    selector: "welcome"
})
export class WelcomeComponent {

    orders=[{ 
        "orderNumber"  :  101, 
        "dish"   :  "Burger", 
        "price"      :  200,
        "quantity" : 2 
    },
    { 
        "orderNumber"  :  102, 
        "dish"   :  "Pizza", 
        "price"      :  600,
        "quantity" : 7 
    },
    { 
        "orderNumber"  :  103, 
        "dish"   :  "Ice cream", 
        "price"      :  60,
        "quantity" : 5 
    }
]

}