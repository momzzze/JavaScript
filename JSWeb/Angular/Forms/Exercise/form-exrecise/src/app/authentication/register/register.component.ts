import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: RegisterModel;
  loginFailed: boolean;
  errMessage: string;

  constructor(private authService: AuthService,
  private router:Router) {
    this.model = new RegisterModel('', '', '', '', '', 18)
  }

  ngOnInit() {
  }
  register() {
    delete this.model['confirmPassword'];
    this.authService.register(this.model)
      .subscribe(data=>{
        this.router.navigate(['/login']);
      },err=>{
          this.loginFailed=true;
          this.errMessage=err.error.description
      })

  }
}
