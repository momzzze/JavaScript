 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AppComponent } from './app.component';


 const routes: Routes = [
   {
     path:'',
     pathMatch:'full',
     component:UsersComponent
   },
   {
    path:'users',
    component:UserListComponent
   }  
 ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
 export const AppRoutingModule=RouterModule.forRoot(routes) 
