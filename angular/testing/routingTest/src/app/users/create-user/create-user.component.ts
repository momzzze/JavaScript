import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.Service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  constructor(private userService: UserService
  ) {
    this.userService.statusUpdate.subscribe(
      (status: string) => {
        alert(status)
      })
  }
  id: number = 1;
  ngOnInit() {
  }


  add(name, password, email) {
    this.userService.addUser(this.id, name.value, password.value, email.value);
    this.id++;
  }

}
