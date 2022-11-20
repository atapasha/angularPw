import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
length=0;
includeLetters = false;
icludeNumbers=false;
includeSimboles=false;
  password = '';



  
 
  constructor() {
    this.password = '';
  }
  onButtonClick() {
  const numbers="1234567890";
  const letters='asdfghjlkuytw';
  const simbols='@#$%^&*()';

 
let validCharts='';
 
     if(this.includeLetters){
      validCharts += letters;

     }
     if(this.icludeNumbers){
      validCharts += numbers;

     }
     if(this.includeSimboles){
      validCharts += simbols;

     }
     console.log(validCharts)



     let generatedPassword='';
     for (let i=0;i<this.length;i++){

      const index=Math.floor(Math.random() *validCharts.length)
      generatedPassword+=validCharts[index];
      console.log(generatedPassword)
     } 

this.password=generatedPassword
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
 
  onChangeLength(value:any){

const parsedValue=parseInt(value)
    console.log(parsedValue)
  }


 }





