import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { VarsharedService } from '../../services/varshared.service';
import { SharedUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo: string = "Kulk Store";
  usuario: string | undefined;


  constructor(private cartService:CartService, private varsharedService: VarsharedService) { }

  ngOnInit(): void {
    this.varsharedService.getValue().subscribe((value: SharedUser) => {
      this.usuario = value.name;
    });
  }


  get cart() {
    return this.cartService.userCart;
  }
  get total() {
    return this.cart.itemscount;
  }

  logout() {
    localStorage.removeItem('hulk_token');
    console.log(localStorage.getItem('hulk_token'))
    this.varsharedService.setValue({ name: 'anonimo',rol: 'CUSTOMER'});
  }




}
