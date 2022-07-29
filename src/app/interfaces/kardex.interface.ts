import { Product } from './product.interface';
export interface Kardex {
    product: Product;
    fecha: Date;
    type: string;
    stock: number;
    price: number;
}
