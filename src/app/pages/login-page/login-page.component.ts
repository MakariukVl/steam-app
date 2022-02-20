import { Component, OnInit } from '@angular/core';
import { LoginFormModel } from '@core/model/login-form.model';

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

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
