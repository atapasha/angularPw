import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  includeLetters = false;

  password = '';


  constructor() {
    this.password = '';
  }
  onButtonClick() {

    this.password = 'mypassword';
    console.log(this.includeLetters);


  }


  onChangeLetter() {
    this.includeLetters = !this.includeLetters

  }


}





