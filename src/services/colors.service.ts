import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  private easyRegex= /^[a-zA-Z]+$|^[0-9]+$|^[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/;
  private mediumRegex = /^(?=.*[a-zA-Z])(?=.*[\W_]).+$|^(?=.*[a-zA-Z])(?=.*\d).+$|^(?=.*\d)(?=.*[\W_]).+$/;
  private strongRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).+$/;

  private getBase(password: string) {
    if(password.length == 0 ){
      return "gray";
    }
    if(password.length < 8 ){
      return "red";
    }
    if(this.strongRegex.test(password)){
      return "green";
    }
    return null;
  }

  getFirstColor(password: string): string{

    let color = this.getBase(password);
    if(color!=null){
      return color;
    }
    if(this.mediumRegex.test(password)){
      return "yellow";
    } 
    if(this.easyRegex.test(password)){
      return "red";
    }
    return "gray";
  } 

  getSecondColor(password: string): string{

    let color = this.getBase(password);
    if(color!=null){
      return color;
    }
    if(this.mediumRegex.test(password)){
      return "yellow";
    } 
    return "gray";
  }

  getThirdColor(password: string): string{

    let color = this.getBase(password);
    if(color!=null){
      return color;
    }
    return "gray";
  }

}
