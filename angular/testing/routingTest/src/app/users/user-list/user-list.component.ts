import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.Service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: User[]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  userDelete(id){
    this.userService.removeUser(id);
  }

  userEdit(id){
    this.userService.statusUpdate.emit('Updated: '+ id)
  }
}
