import { User } from './user.model'
import { EventEmitter } from '@angular/core';

export class UserService {
    users: User[] = []
    user: User;

    statusUpdate=new EventEmitter<string>()

    addUser(id, name, password, email, ) {
        this.user = {
            id: id,
            name: name,
            password: password,
            email: email
        }
        this.users.push(this.user);
    }

    getUsers() {
        return this.users;
    }


    removeUser(id) {
        let index = this.users.map(
            (item) => {
                return item.id
            }).indexOf(id)

        this.users.splice(index, 1)
    }

}