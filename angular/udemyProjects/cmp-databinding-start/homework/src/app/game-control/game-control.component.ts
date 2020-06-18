import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output() intervalFired = new EventEmitter<number>()
  interval;
  lastNumber = 0;
@Output() incrementedNumb=new EventEmitter<number>()
  incrementNumb=0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }
  onStopGame() {
    clearInterval(this.interval);
  }



  onPowerGame(){    
    this.incrementedNumb.emit(this.incrementNumb++)
    
  }
  onLowerGame(){
    this.incrementedNumb.emit(this.incrementNumb--)    
  }
}
