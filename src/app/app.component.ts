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

  
  getFirstColor(): string{
    if(this.password.length == 0){
      return "gray";
    }
  
    if(this.password.length < 8 || this.isPasswordEasy()){
      return "red";
    }
    
    if(this.isPasswordMedium()){
      return "yellow";
    } 
    
    if(this.isPasswordStrong()){
      return "green";
    }
  
    return "gray";
  } 
  
  getSecondColor(): string{
    if(this.password.length == 0){
      return "gray";
    }
  
    if(this.password.length < 8){
      return "red";
    }
  
    if(this.isPasswordEasy()){
      return "gray";
    }
    
    if(this.isPasswordMedium()){
      return "yellow";
    } 
    
    if(this.isPasswordStrong()){
      return "green";
    }
  
    return "gray";
  }
  
  getThirdColor(): string{
  
    if(this.password.length == 0){
      return "gray";
    }
  
    if(this.password.length < 8){
      return "red";
    }
  
    
    if(this.isPasswordEasy()){
      return "gray";
    }
    
    
    if(this.isPasswordMedium()){
      return "gray";
    } 
    
    if(this.isPasswordStrong()){
      return "green";
    }
  
    return "gray";
  }
  
  isPasswordEasy(): boolean{
     const easyRegex = /^[a-zA-Z]+$|^[0-9]+$|^[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/;
     const mediumRegex = /^(?=.*[a-zA-Z])(?=.*[\W_]).+$|^(?=.*[a-zA-Z])(?=.*\d).+$|^(?=.*\d)(?=.*[\W_]).+$/;
     const strongRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).+$/;
     
     return easyRegex.test(this.password) && !mediumRegex.test(this.password) && !strongRegex.test(this.password);
  }
  
  isPasswordMedium(): boolean{
     const mediumRegex = /^(?=.*[a-zA-Z])(?=.*[\W_]).+$|^(?=.*[a-zA-Z])(?=.*\d).+$|^(?=.*\d)(?=.*[\W_]).+$/;
     const strongRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).+$/;
     
     return mediumRegex.test(this.password) && !strongRegex.test(this.password);
  }
  
  isPasswordStrong(): boolean{
     const strongRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).+$/;
     
     return strongRegex.test(this.password);
  }
  

}
