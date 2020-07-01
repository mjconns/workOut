import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workOut';



  //public countNum: number;

  countUp() {
    let countNum = 0;
    var i: number;
    if (countNum < 100) {
      for(i = countNum; i>=1; i++)
      console.log(countNum);
    }
  }


}
