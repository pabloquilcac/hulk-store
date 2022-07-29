export interface User {
    email: string;
    password: string;
    name: string;
    phone: string;
    address: string;
    rol: string;
  }

export interface Login {
    email: string;
    password: string;
}

export interface SharedUser {
    name: string;
    rol: string;
}