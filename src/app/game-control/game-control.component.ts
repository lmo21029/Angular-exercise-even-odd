import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{increment: number}>();
  @Output() gameStoped = new EventEmitter<{}>();
  increment = 0;
  interval: any;

  constructor() { }

  ngOnInit() {
  }

  startGameLoop() {
    this.interval = setInterval( () => {
      this.gameStarted.emit({
        increment: this.increment++
      })
    } ,1000)
  }  

  stopGameLoop() {
    clearInterval(this.interval);
  }


}
