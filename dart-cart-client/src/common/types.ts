import internal from "stream";
import { ShorthandPropertyAssignment } from "typescript";
import store from "./store";

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

export interface Shop {
  id: number;
}

export interface OrderDetail {
  id: number;
  cost: number;
  name: string;
  description: string;
  quantity: number;
}

export interface Invoice {
  id: number;
  orderPlaced: bigint;
  shippedFrom: string;
  shippedTo: string;
  customer: User;
  shop: Shop;
  orderDetails: OrderDetail[]
}

export interface Seller {
  id: number;
  name: string;
  homepage: string;
  description: string;
  user: User;
}

export interface Shop {
  id: number;
  location: string;
  seller: Seller;
}

export type RootState = ReturnType<typeof store.getState>;
export type SecurityToken = string;
export type AppDispatch = typeof store.dispatch;
