import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControlName, FormControl} from '@angular/forms'


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  form1=new FormGroup({
  "Username":new FormControl(''),
  "Password":new FormControl(''),
  "ConfirmPassword":new FormControl('')
  
})


  constructor() { }

  log(){
    console.log(this.form1.value)
  }


  ngOnInit() {
  }

}
