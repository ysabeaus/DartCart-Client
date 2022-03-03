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

export class ShopProduct {

    shop_product_id: number;
    shop_id:        number;
    product:        Product;
    quantity:       number;
    price:          number;
    discount:       number;

    constructor (shop_product_id: number, product: Product, shop_id:  number, quantity: number, price: number, discount: number) {
        this.shop_product_id = shop_product_id;
        this.shop_id = shop_id;
        this.product = product;
        this.price = price;
        this.quantity = quantity;         
        this.discount = discount;
    }
    
}