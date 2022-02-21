import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { BehaviorSubject, Observable, of, switchMap, take } from 'rxjs';
import { EncrDecrService } from './encr-decr.service';
import { FakeUsersService } from './fake-users.service';

@Injectable({
  providedIn: 'root'
  // providedIn: CoreModule,
})
export class AuthService {
  signedUser: UserCredentialsModel | null = null;
  status: string = '';
  login$ = new BehaviorSubject<{ authorized: boolean; status: string }>({
    authorized: !!this.signedUser,
    status: this.status,
  });

  constructor(
    private fakeUsers: FakeUsersService,
    private encrDecrService: EncrDecrService
  ) {}

  login(email: string, password: string) {
    const usersFound$ = this.fakeUsers.getCredentionalBy(email);
    usersFound$.subscribe((users) => {
      const usersFound = users;
      if (usersFound.length >= 1) {
        const userFound = usersFound[0]; // get first found user with specified email
        const salt = userFound.salt; // get his salt
        /* compute hash for inputted password  */
        const passwordHash = this.encrDecrService.hashPBKDF2(password, salt);
        /* compare saved in db hash with computed hash */
        if (userFound.password === passwordHash) {
          this.signedUser = userFound;
          this.status = 'User successfully signed in!';
          // TODO: Wait timeouts if invalid password
        } else {
          this.signedUser = null;
          this.status = 'Error! You typed wrong password!';
          this.login$.next({ authorized: !!this.signedUser, status: this.status });
        }
        // console.log('login:', email);
        // console.log('password:', password);
        // console.log('encrypted hash:', passwordHash.toString());
        // console.log('salt:', salt.toString());
      } else {
        this.signedUser = null;
        this.status = 'Error! You typed not registered email!';
        this.login$.next({ authorized: !!this.signedUser, status: this.status });
      }
    });
    // usersFound$.pipe(
    //   switchMap(usersFound => of(usersFound))
    // )
  }

  logout() {
    this.signedUser = null;
    this.status = 'You have successfully logout!';
    this.login$.next({ authorized: !!this.signedUser, status: this.status });
  }

  getLoginObservable(): Observable<{ authorized: boolean; status: string }> {
    return this.login$ as Observable<{ authorized: boolean; status: string }>;
  }
}
