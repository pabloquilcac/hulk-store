import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../interfaces/product.interface';
import { Kardex } from '../../interfaces/kardex.interface';
import { KardexService } from '../../services/kardex.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'description', 'price', 'stock','min_stock','kardex'];
  dataSource = this.products;
  cantidad: number=0;


  constructor(private productService: ProductService,private kardexService:KardexService,private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  get products() {
    return this.productService.getProducts();
  }

  kardex: Kardex | undefined

  entry(product: Product) {

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
