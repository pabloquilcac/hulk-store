import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Md5 } from 'md5-typescript';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User={
    email: '',
    password: '',
    name: '',
    phone: '',
    address: '',
    rol: 'CUSTOMER'
  };

  ocultar: boolean = true;

  constructor(public authService: AuthService,private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.user);
    this.user.password=Md5.init(this.user.password)
    this.authService.saveUser(this.user).subscribe( data => {
      console.log(data);
      this.openSnackBar('Usuario registrado ','Aceptar')
      this.router.navigate(['/cart']);
    });
  }

  openSnackBar(message:string,value:string) {
    this._snackBar.open(message, value, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
