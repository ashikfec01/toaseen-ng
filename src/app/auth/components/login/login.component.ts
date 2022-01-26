import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RegisterVM } from '../../models/register.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: RegisterVM = new RegisterVM();
  constructor(public app: AppComponent, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginData);
    localStorage.clear();
    this.authService.login(this.loginData).subscribe({
      next: res => {
        console.log(res);
        localStorage.setItem('access_token', res.access_token);
        this.router.navigate(['/collection']);
        console.log(this.router.navigate(['collection']));

      },
      error: err => {
        console.log(err);
        // this.router.navigate['/auth/log']
      }
    })
  }
}
