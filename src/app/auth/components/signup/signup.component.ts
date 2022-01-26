import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterVM } from '../../models/register.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpData: RegisterVM = new RegisterVM();
  pass: string;
  confirmPass: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.signUpData.password = this.confirmPass;
    console.log(this.signUpData);
    this.authService.registerUser(this.signUpData).subscribe({
      next: res => {
        console.log("res", res);
        // this.localDB.storeInLocalDB('access_token', `${res.access_token}`);
        localStorage.setItem('access_token', `${res.access_token}`)
        this.router.navigate['/collection']
      },
      error: err => {
        console.log("err", err);
        this.router.navigate['/auth/login']
      }
    })

  }

}
