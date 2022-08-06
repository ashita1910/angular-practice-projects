import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() incNum = new EventEmitter();
  num = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.num += 1;
      this.incNum.emit(this.num);
    }, 1000);
    console.log("num: " , this.num);
  }

  endGame() {
    clearInterval(this.interval);
  }

}
