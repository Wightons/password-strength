import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordStrengthStripesComponent } from './password-strength-stripes/password-strength-stripes.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthStripesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
