import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-strength';
  password = '';

  onInput(event: Event) {
    this.password = (event.target as HTMLTextAreaElement).value;
  }

   easyRegex = /^[a-zA-Z]+$|^[0-9]+$|^[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/;
   mediumRegex = /^(?=.*[a-zA-Z])(?=.*[\W_]).+$|^(?=.*[a-zA-Z])(?=.*\d).+$|^(?=.*\d)(?=.*[\W_]).+$/;
   strongRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).+$/;

  getBase() {
    if(this.password.length == 0 ){
      return "gray";
    }
    if(this.password.length < 8 ){
      return "red";
    }
    if(this.strongRegex.test(this.password)){
      return "green";
    }
    return null;
  }

  getFirstColor(): string{

    let color = this.getBase();
    if(color!=null){
      return color;
    }
    if(this.mediumRegex.test(this.password)){
      return "yellow";
    } 
    if(this.easyRegex.test(this.password)){
      return "red";
    }
    return "gray";
  } 

  getSecondColor(): string{

    let color = this.getBase();
    if(color!=null){
      return color;
    }
    if(this.mediumRegex.test(this.password)){
      return "yellow";
    } 
    return "gray";
  }
  
  getThirdColor(): string{

    let color = this.getBase();
    if(color!=null){
      return color;
    }
    return "gray";
  }
}