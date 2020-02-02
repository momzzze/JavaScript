import { Component, OnInit, Directive } from '@angular/core';

// @Directive({
//   selector:'[]'
// })

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "testServer";
  checkUsername = "No username!";
  username = "";
  isEmpty = true;
  serverCreated = false;
  servers = ['testserver', 'testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onSubmitValidation() {
    this.checkUsername = `${this.username} was successfuly logged in!`;
    this.isEmpty = false;
  }
  deleteUsername() {
    this.username = '';
    this.checkUsername = "No username!";
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
