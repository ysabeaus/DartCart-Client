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
    id: number;
    shop: Shop;
    product: Product;
    quantity: number;
    price: number;
    discount: number;

    constructor(id: number, product: Product, shop: Shop, quantity: number, price: number, discount: number) {
        this.id = id;
        this.shop = shop;
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
    }
}


