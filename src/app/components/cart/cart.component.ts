import { Component, OnInit } from '@angular/core';
import { ItemCart } from '../../interfaces/cart.interface';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Kardex } from '../../interfaces/kardex.interface';
import { KardexService } from '../../services/kardex.service';


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

  constructor(private cartService: CartService,private _snackBar: MatSnackBar,private router:Router,private kardexService:KardexService) {

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
    if (this.token!=null) {
      console.log('comprar')
    } else  {
      this.openSnackBar('Por favor inicie sesión para continuar la compra','Aceptar');
      this.router.navigate(['/login']);

    }
  }

  get logueado() {
    if (localStorage.getItem('hulk_token')) {
      return true;
    } else {
      return true;
    }
  }


  kardex: Kardex | undefined

  sale(product: Product) {

    this.kardex={
        product: product,
        fecha: new Date(),
        type: 'I',
        stock: 10,
        price: 19.20
      }

      this.kardexService.saveKardex(this.kardex).subscribe( data => {
        this.openSnackBar('Kardex registrado con exito','Aceptar')
        this.router.navigate(['admin-productos']);
      });
  }
 
  openSnackBar(message:string,value:string) {
    this._snackBar.open(message, value, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
