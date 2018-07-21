import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Game } from '../domain/game';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  @Input('subGame') subGame:Game;
  @Output() notification =new EventEmitter<string>();
  constructor() { }

  ShowSubscription(){
    console.log(`The ID is ${this.subGame.id}`)
    this.notification.emit('sub success')
  }

  ngOnInit() {
   
  }

}
