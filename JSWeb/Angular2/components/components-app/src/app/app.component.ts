import { Component } from "@angular/core";

@Component({
  selector: "softuni-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todos = [];
  addTodo(title: string) {
    this.todos.push({ title, completed: false });
  }

  toggleCompleted(idx: number,data:number) {
    console.log(data)
    const currentTodo = this.todos[idx];
    this.todos[idx]={...currentTodo,completed: !currentTodo.completed}
  }
}
