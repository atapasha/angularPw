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
  const numebrs=""
     


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





