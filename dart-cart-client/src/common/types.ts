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
