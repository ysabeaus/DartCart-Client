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

export class Shop {
    location:   string;
    shop_id:    number;

    constructor (location: string, shop_id: number) {
        this.location = location
        this.shop_id =  shop_id
    }

}

export class Seller {
    seller_id:      number;
    shop:           Shop;
    location:       string;
    homepage:       string;
    user:           User;
    
    constructor (seller_id: number, location: string, homepage:  string, user:  User, shop: Shop) {
        this.seller_id = seller_id;
        this.location = location;
        this.homepage = homepage;
        this.user =     user;
        this.shop =     shop;
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