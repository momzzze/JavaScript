import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  todo = {
    title: "Hello!"
  }

  constructor(todoService:TodoService) {
    todoService.loadTodos()
    setTimeout(() => {
      this.title = '123';
      this.todo = { title:"123" }
      // this.todo.title='123';
    }, 5000)
  }
}
