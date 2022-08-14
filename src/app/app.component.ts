import { Component, ElementRef, ViewChild } from '@angular/core';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-example';

  @ViewChild(EvenComponent) evenComponent: any;
  @ViewChild(OddComponent) oddComponent: any;

  oddComp: any = [];
  evenComp: any = [];
  incNumber: number = 0;
  evenValue = 0;
  oddValue = 0;

  constructor(public counterService: CounterService){}

  createComponent(event: any){
    console.log("event: ", event);
    this.incNumber = event;
    if(this.incNumber % 2 != 0) {
      this.oddValue = this.incNumber;
      this.oddComp.push(this.oddComponent);
    }
    else {
      this.evenValue = this.incNumber;
      this.evenComp.push(this.evenComponent);
    }
  }
}
