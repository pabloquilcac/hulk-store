import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User, Login } from '../interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient,private _snackBar: MatSnackBar) {}

  login(user: Login): Observable<any> {
    let params = new HttpParams().set("email", user.email).set("password", user.password);
    return this.http.post("http://localhost:8080/api/users/login", params).pipe(
      catchError(
        e => {
         this.openSnackBar('Email o password no validos','Aceptar');
          return throwError(() => new Error('Error al autenticar'));
        }
      ) ) 
  }

  openSnackBar(message:string,value:string) {
    this._snackBar.open(message, value, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  saveUser(user: User): Observable<any> {
    return this.http.post("http://localhost:8080/api/users/save",user).pipe(
      catchError(
        e => {
          this.openSnackBar('Error al registrarse','Aceptar');
          return throwError(() => new Error('Error al save user'));
        }
      ) ) ;
  }


}
