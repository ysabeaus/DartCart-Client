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

export type RootState = ReturnType<typeof store.getState>;
