import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  displayText: boolean = false;
  dataArr: any = [];
  btnClickCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.displayText = !this.displayText;
    this.dataArr.push({
      'count': this.btnClickCount += 1,
      'date': new Date()
    });
  }

}
