import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, SharedUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class VarsharedService {

  private usuario: BehaviorSubject<SharedUser>;


  constructor() {
    this.usuario = new BehaviorSubject<SharedUser>({ name: 'anonimo',rol: 'CUSTOMER'});
    
  }

  getValue(): Observable<SharedUser> {
    return this.usuario.asObservable();
  }
  setValue(logueado: SharedUser): void {
    this.usuario.next(logueado);
  }


 
}
