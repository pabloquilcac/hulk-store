import { Injectable } from '@angular/core';
import { Cart, ItemCart } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _userCart: Cart = {
    items: [],
    total: 0,
    itemscount: 0
  }

  constructor() { }

  get userCart(): Cart {
    //llaves y los tres puntos operados spread rompe la referencia
    return this._userCart;
  }

  addItem(item: ItemCart) {
    this._userCart.items.push(item);
    this.calculaTotal();
    this.itemsCount();
  }

  calculaTotal() {
    this._userCart.total=0;
    this._userCart.items.forEach((item) => { 
      console.log('suma')
      console.log(item);
      this._userCart.total+=item.amount;
    })
  }

  itemsCount() {
    this._userCart.itemscount=0;
    this._userCart.items.forEach((item) => { 
      this._userCart.itemscount+=1;
    })
  }

  

  delItem(item: ItemCart) {
    console.log('eliminar');
  }

}
