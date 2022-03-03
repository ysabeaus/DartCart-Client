import { User } from "../common/types";

export class Product {
    product_id:     number;
    name:           string;
    description:    string;
    catagories:     string[];

    constructor (product_id: number, name: string, description: string, catagories: string[]) {
        this.product_id = product_id;
        this.name = name;         
        this.description = description
        this.catagories = catagories;
    }
    
}

/*
[     {         
    "id": 1,         
    "quantity": 10,         
    "price": 15,        
    "discount": 2,        
    "shop": {             
        "id": 1,             
        "location": "1",             
        "seller": {                 
            "id": 1,                 
            "homepage": "/sellers/bestseller",                 
            "description": "THE BEST SELLER!",                 
            "user": {                    
                "id": 2,                     
                "username": "Sammykins",                     
                "password": "3e4463134cf818db84a14d750b86603aa0611b1989c337d4bc9f0a14e3a08bb1",                     
                "firstName": "Samantha",                     
                "lastName": "Mann",                     
                "email": "sammannnotthefish@gmail.com",                     
                "phone": "757-978-6422",                     
                "location": "address",                     
                "registrationDate": 1645737413547                 }             }         },        
                "product": {             
                    "id": 1,             
                    "name": "Kelloggs Froot Loops",             
                    "description": "Delicious frooty flava",
                    "categories": [
                    {
                        "id": 1,
                        "name": "Food"
                    }
                    ]
                }
    }
*/

export class Seller {
    seller_id:      number;
    location:       string;
    homepage:       string;
    user:           User;
    
    constructor (seller_id: number, location: string, homepage:  string, user:  User) {
        this.seller_id = seller_id;
        this.location = location;
        this.homepage = homepage;
        this.user =     user;
    }

}



export class ShopProduct {

    shop_product_id: number;
    shop_id:        number;
    product:        Product;
    quantity:       number;
    price:          number;
    discount:       number;
    seller:         Seller;

    constructor (shop_product_id: number, product: Product, shop_id:  number, quantity: number, price: number, discount: number, seller: Seller) {
        this.shop_product_id = shop_product_id;
        this.shop_id = shop_id;
        this.product = product;
        this.price = price;
        this.quantity = quantity;         
        this.discount = discount;
        this.seller    = seller;
    }
    
}