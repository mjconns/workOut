import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-out-programs',
  templateUrl: './work-out-programs.component.html',
  styleUrls: ['./work-out-programs.component.css']
})
export class WorkOutProgramsComponent implements OnInit {
  public hidden = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor() { }

  ngOnInit() {
  }

}
