import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RecoverComponent } from './components/recover/recover.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    RecoverComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    InputTextModule,
  ]
})
export class AuthModule { }
