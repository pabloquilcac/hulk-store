import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Md5 } from 'md5-typescript';
import { Router } from '@angular/router';
import { VarsharedService } from '../../services/varshared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string='';
  password:string='';

  ocultar: boolean = true;

  constructor(public authService: AuthService,private router: Router,private varsharedService: VarsharedService) { }

  ngOnInit(): void {
  }
  
  login(){
    console.log(this.email);
    console.log(Md5.init(this.password));
    this.varsharedService.setValue({ name: 'anonimo',rol: 'anonimo'});
    const user = {email: this.email, password: Md5.init(this.password) };
    this.authService.login(user).subscribe( data => {
      console.log(data);
      this.varsharedService.setValue({name: data.name,rol: data.rol});
      localStorage.setItem('hulk_token', Md5.init(this.password));
      this.router.navigate(['/cart']);
    });
  }



}
