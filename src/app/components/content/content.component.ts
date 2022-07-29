import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../../interfaces/product.interface';
import { ItemCart } from '../../interfaces/cart.interface';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  products: Product[] = [];

  item: ItemCart = {
    product: 'Prueba',
    quantity: 2,
    price: 20,
    amount: 40

  }

  getProducts():void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  
  constructor(private productService: ProductService,private cartService: CartService,private _snackBar: MatSnackBar) {
    
  }
 


  ngOnInit(): void {
    this.getProducts();
  }

  addToCart(product: Product) {
    this.item.product=product.description;
    this.item.quantity=1;
    this.item.price=product.price;
    this.item.amount=product.price*this.item.quantity;
    this.cartService.addItem(this.item);
    this.openSnackBar();
  }



  openSnackBar() {
    this._snackBar.open('Se agregó el artículo a su compra', 'Aceptar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
