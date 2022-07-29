import { Component, OnInit } from '@angular/core';
import { ItemCart } from '../../interfaces/cart.interface';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  token: string | null=null;

  get cart() {
    return this.cartService.userCart;
  }

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {

  }

  displayedColumns: string[] = ['product', 'quantity', 'price', 'amount'];
  dataSource = this.cart.items;
  total: number = this.cart.total;


  
  comprar() {
    this.token=null;
    if (localStorage.getItem('hulk_token')) {
      this.token=localStorage.getItem('hulk_token');
    }
   
    console.log(localStorage.getItem('hulk_token'))
    if (this.token!=null) {
      console.log('comprar')
    } else  {
      console.log('no comprar, iniciar sesion')
    }
  }

  get logueado() {
    if (localStorage.getItem('hulk_token')) {
      return true;
    } else {
      return true;
    }
  }
 


}
