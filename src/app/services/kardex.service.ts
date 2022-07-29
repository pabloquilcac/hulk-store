import { Injectable } from '@angular/core';
import { Kardex } from '../interfaces/kardex.interface';
import { catchError, Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KardexService {

  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }

  saveKardex(kardex: Kardex): Observable<any> {
    return this.http.post("http://localhost:8080/api/kardex/save",kardex).pipe(
      catchError(
        e => {
          this.openSnackBar('Error al registrar el ingreso','Aceptar');
          return throwError(() => new Error('Error al save kardex'));
        }
      ) ) ;
  }

  openSnackBar(message:string,value:string) {
    this._snackBar.open(message, value, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
