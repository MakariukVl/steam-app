import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginFormModel } from '@core/models/login-form.model';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { AuthService } from '@core/services/auth.service';
// import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  // auth$: Observable<{
  //   authorized: boolean;
  //   status: string;
  //   user: UserCredentialsModel | null;
  // }>;
  // authSubscribtion: Subscription;
  formInput: LoginFormModel = {
    email: '',
    password: '',
  };
  signedUser: UserCredentialsModel | null;
  status: string;
  isAuthenticated: boolean;


  constructor(private authService: AuthService) {
    console.log('Ctor signedUser',authService.signedUser);
    console.log('Ctor status',authService.status);
    console.log('Ctor Auth:', !!authService.signedUser);
    
    this.signedUser = authService.signedUser;
    this.status = authService.status;
    this.isAuthenticated = !!authService.signedUser;

    // this.auth$ = authService.getLoginObservable();
    // this.authSubscribtion = this.auth$.subscribe(
    //   (cred: {
    //     authorized: boolean;
    //     status: string;
    //     user: UserCredentialsModel | null;
    //   }) => {
    //     console.log('Subscribe authorized cred', cred.authorized);
    //     console.log('Subscribe status cred', cred.status);
    //     console.log('Subscribe user cred', cred.user);

    //     console.log('Subscribe user direct', authService.signedUser);
    //     console.log('Subscribe status direct', authService.status);
    //   }
    // );
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    // this.authSubscribtion.unsubscribe();
  }

  onSubmit() {
    this.authService.login(
      this.formInput.email ?? '',
      this.formInput.password ?? ''
    );

    this.signedUser = this.authService.signedUser;
    this.status = this.authService.status;
    this.isAuthenticated = !!this.authService.signedUser;

    console.log('Submit');
    console.log(this.authService.signedUser);
    console.log(this.authService.status);
    console.log('Auth:', !!this.authService.signedUser);
  }
}
