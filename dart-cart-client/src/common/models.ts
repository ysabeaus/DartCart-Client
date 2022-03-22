import { Shop } from "./types";

export class Product {
    product_id: number;
    id:     number;
    name: string;
    description: string;
    categories: string[];

    constructor(product_id: number, id: number, name: string, description: string, categories: string[]) {
        this.product_id = product_id;
        this.id = id;
        this.name = name;
        this.description = description;
        this.categories = categories;
    }
}

export class ShopProduct {
    shop_product_id: number;
    shop: Shop;
    product: Product;
    quantity: number;
    price: number;
    location: string;
    discount: number;

    constructor(shop_product_id: number, product: Product, shop: Shop, quantity: number, price: number, location: string, discount: number) {
        this.shop_product_id = shop_product_id;
        this.shop = shop;
        this.product = product;
        this.price = price;
        this.location = location;
        this.quantity = quantity;
        this.discount = discount;
    }
}


