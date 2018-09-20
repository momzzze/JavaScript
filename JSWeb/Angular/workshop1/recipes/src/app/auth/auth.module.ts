import {NgModule} from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
    declarations:[
        SigninComponent,
        SignupComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
    ]
})

export class AuthModule{}