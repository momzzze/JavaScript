import { Component, OnInit } from '@angular/core';
import { Game } from '../domain/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: Array<Game>
  isShown: boolean = false;
  username: string = "My Name";
  constructor() {
    this.games = [{ id: 1, title: 'First Game', image: 'http://www.lecshare.com/wp-content/uploads/2017/01/dai-franchise-page-img.jpg' },
    { id: 2, title: 'Second Game', image: 'http://www.lecshare.com/wp-content/uploads/2017/01/dai-franchise-page-img.jpg' }]
  }
  notify(notification: string) {
    console.log(notification);
  }

  showName(name) {
    this.username = name
    console.log(name);

  }
  showContacts() {
    this.isShown = !this.isShown;
  }

  ngOnInit() {
  }

}