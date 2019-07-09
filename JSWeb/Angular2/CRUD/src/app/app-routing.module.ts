import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CreateFurnitureComponent } from './furniture/create-furniture/create-furniture.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { FurnitureAllComponent } from './furniture/furniture-all/furniture-all.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'furniture/create', component: CreateFurnitureComponent },
  {path:'furniture/all',component:FurnitureAllComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }