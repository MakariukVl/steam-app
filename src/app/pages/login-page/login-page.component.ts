import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormModel } from '@core/models/login-form.model';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  formInput: LoginFormModel = {
    email: '',
    password: '',
  };
  signedUser: UserCredentialsModel | null;
  status: string;
  isAuthenticated: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.signedUser = authService.signedUser;
    this.status = authService.status;
    this.isAuthenticated = !!authService.signedUser;
  }

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(
      this.formInput.email ?? '',
      this.formInput.password ?? ''
    );

    this.signedUser = this.authService.signedUser;
    this.status = this.authService.status;
    this.isAuthenticated = !!this.authService.signedUser;

    if (this.signedUser) {  // after successfully logging In
      this.router.navigate(['profile']);
    }
  }
}
