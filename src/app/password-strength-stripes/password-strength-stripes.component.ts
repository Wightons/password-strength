import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColorsService } from 'src/services/colors.service';


@Component({
  selector: 'app-password-strength-stripes',
  templateUrl: './password-strength-stripes.component.html',
  styleUrls: ['./password-strength-stripes.component.css']
})
export class PasswordStrengthStripesComponent{
  @Input() password: FormControl;

  constructor(public colorsService: ColorsService){
    this.password = new FormControl('');
  }


}
