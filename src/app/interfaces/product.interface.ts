export interface Category {
    id: number;
    description: string;
    active: string
}

export interface Product {
    category: Category;
    heroe: string;
    name: string;
    stock: number;
    min_stock: number;
    stockStatus: string;
    description: string;
    image: string;
    price: number;
    active: string;
  }