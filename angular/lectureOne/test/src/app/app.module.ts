import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
