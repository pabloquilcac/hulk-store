import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products: Product[]=[
    {
      category: {
        id: 1,
        description:'Camiseta',
        active:'A'
      },
      heroe: 'Spiderman',
      name: 'Camiseta',
      stockStatus: 'IN STOCK',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      image: 'camiseta.jpg',
      price: 2000,
      stock: 10,
      min_stock: 3,
      active: 'A'
      
    },
    {
      category: {
        id: 1,
        description:'Camiseta',
        active:'A'
      },
      heroe: 'Spiderman',
      name: 'Camiseta',
      stockStatus: 'IN STOCK',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      image: 'camiseta.jpg',
      price: 2000,
      stock: 10,
      min_stock: 3,
      active: 'A'
      
    },
    {
      category: {
        id: 1,
        description:'Camiseta',
        active:'A'
      },
      heroe: 'Spiderman',
      name: 'Camiseta',
      stockStatus: 'IN STOCK',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      image: 'camiseta.jpg',
      price: 2000,
      stock: 10,
      min_stock: 3,
      active: 'A'
      
    },
    {
      category: {
        id: 1,
        description:'Camiseta',
        active:'A'
      },
      heroe: 'Spiderman',
      name: 'Camiseta',
      stockStatus: 'IN STOCK',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      image: 'camiseta.jpg',
      price: 2000,
      stock: 10,
      min_stock: 3,
      active: 'A'
      
    },
    {
      category: {
        id: 1,
        description:'Camiseta',
        active:'A'
      },
      heroe: 'Spiderman',
      name: 'Camiseta',
      stockStatus: 'IN STOCK',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      image: 'camiseta.jpg',
      price: 2000,
      stock: 10,
      min_stock: 3,
      active: 'A'
      
    },
    {
      category: {
        id: 1,
        description:'Camiseta',
        active:'A'
      },
      heroe: 'Spiderman',
      name: 'Camiseta',
      stockStatus: 'IN STOCK',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      image: 'camiseta.jpg',
      price: 2000,
      stock: 10,
      min_stock: 3,
      active: 'A'
      
    },
    {
      category: {
        id: 1,
        description:'Camiseta',
        active:'A'
      },
      heroe: 'Spiderman',
      name: 'Camiseta',
      stockStatus: 'IN STOCK',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      image: 'camiseta.jpg',
      price: 2000,
      stock: 10,
      min_stock: 3,
      active: 'A'
      
    },
    {
      category: {
        id: 1,
        description:'Camiseta',
        active:'A'
      },
      heroe: 'Spiderman',
      name: 'Camiseta',
      stockStatus: 'IN STOCK',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      image: 'camiseta.jpg',
      price: 2000,
      stock: 10,
      min_stock: 3,
      active: 'A'
      
    }
  ];

  constructor(private http: HttpClient) { }

  
  
getProducts() : Observable<Product[]> {
  return this.http.get<Product[]>("http://localhost:8080/api/products/actives");
}
  
}
