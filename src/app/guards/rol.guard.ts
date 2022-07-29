import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VarsharedService } from '../services/varshared.service';
import { SharedUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {

  usuario: string | undefined;
  rol: string | undefined;

  constructor(private router:Router,private varsharedService: VarsharedService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.getUserAndRol();
    console.log('Desde guard');
    console.log(this.rol)
    if (this.rol=='CUSTOMER') {
      console.log('no deja ingresar');
      this.router.navigate(['/login']);
      return false;
    }
      return true;
  }

  getUserAndRol() {
    this.varsharedService.getValue().subscribe((value: SharedUser) => {
      this.usuario = value.name;
      this.rol = value.rol;
    });
  }
  
}
