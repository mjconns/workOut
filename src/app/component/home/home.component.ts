import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {HomeTSComponent} from './home-ts/home-ts.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public panelOpenState = false;
  public hide = true;
  public isMember: boolean = false;
  public isAvailable: boolean;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  userFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  passwordFormControl1 = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);
  passwordFormControl2 = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(HomeTSComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  checkUsername(value: string): void {
    // this will be where I check username input against taken usernames
    if (value === 'mjconns2009') {
      this.isAvailable = true;
    } else {
      this.isAvailable = false;
    }
  }

}
