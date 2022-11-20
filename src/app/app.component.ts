import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  includeLetters = false;
icludeNumbers=false;
includeSimboles=false;
  password = '';


  constructor() {
    this.password = '';
  }
  onButtonClick() {

    this.password = 'mypassword';
    console.log(`
    generate password with following:
    Includes Letters:${this.includeLetters},
    Includes Numbers:${this.icludeNumbers},
    Includes Simboles:${this.includeSimboles}
    `);


  }


  onChangeLetter() {
    this.includeLetters = !this.includeLetters 

  }

  onChangeUseNumbers(){

    this.icludeNumbers=!this.icludeNumbers
  }

  onChangeUseSimboles(){
    this.includeSimboles=this.includeSimboles
  }


}





