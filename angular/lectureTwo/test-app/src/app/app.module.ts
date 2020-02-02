import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: TodoService,
      useValue:{
        loadTodos(){
          console.log('EI BOGU')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
