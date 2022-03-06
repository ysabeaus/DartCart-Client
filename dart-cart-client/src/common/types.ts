import { ShopProduct } from "./models";
import store from "./store";

export interface Product {
  id: number;
  name: string;
  ordered: boolean;
}

export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  registrationDate: number;
}

export interface CartItem {
  id: number,
  quantity: number,
  saved: boolean,
  customer: User,
  shopProduct: ShopProduct
}

export type RootState = ReturnType<typeof store.getState>;
export type SecurityToken = string;
export type AppDispatch = typeof store.dispatch;
