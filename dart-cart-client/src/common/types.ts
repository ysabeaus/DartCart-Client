import internal from "stream";
import { ShorthandPropertyAssignment } from "typescript";
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

export type RootState = ReturnType<typeof store.getState>;
export type SecurityToken = string;
export type AppDispatch = typeof store.dispatch;
