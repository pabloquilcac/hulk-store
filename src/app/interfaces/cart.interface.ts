import { Product } from './product.interface';
export interface ItemCart {
    product: string;
    price: number;
    quantity: number;
    amount: number;
  }

export interface Cart {
    items: ItemCart[];
    total: number;
    itemscount: number;
}