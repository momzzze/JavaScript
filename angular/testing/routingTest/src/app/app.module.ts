import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UserService } from './users/user.Service';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    CreateUserComponent,
    EditUserComponent,
    
  ],
  imports: [
    BrowserModule,    
    CoreModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
