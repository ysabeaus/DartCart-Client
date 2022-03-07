import { EntityState } from "@reduxjs/toolkit";
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

export interface CheckoutProps {
  user: User,
  shippingAddress: string,
  currentCart: EntityState<CartItem>
}

export interface IShipping {
  id: number,
  streetAddress: string,
  city: string,
  state: string,
  zip: string
}

export type RootState = ReturnType<typeof store.getState>;
export type SecurityToken = string;
export type AppDispatch = typeof store.dispatch;
