import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileFormModel } from '@core/models/profile-form.model';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { UserModel } from '@core/models/user.model';
import { AuthService } from '@core/services/auth.service';
import { FakeUsersService } from '@core/services/fake-users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  formInput: ProfileFormModel = {
    username: '',
    email: '',
    age: '',
  };
  signedUser: UserCredentialsModel | null;
  userProfile$: Observable<UserModel | undefined> | null;
  status: string;
  isAuthenticated: boolean;
  editMode = false;

  /*private route: ActivatedRoute*/
  constructor(
    private authService: AuthService,
    private usersService: FakeUsersService
  ) {
    // console.log(route.snapshot.url.toString()); //profile
    this.signedUser = authService.signedUser;
    this.status = authService.status;
    this.isAuthenticated = !!authService.signedUser;

    if (this.authService.signedUser) {
      this.userProfile$ = this.usersService.getUser(
        this.authService.signedUser.id
      );
    } else {
      this.userProfile$ = null;
    }
  }

  onSubmit() {
    if (this.authService.signedUser) {
      this.usersService
        .getUser(this.authService.signedUser.id)
        .subscribe((user) => {
          if (user) {
            const changedUser: UserModel = {
              name: this.formInput.username,
              email: this.formInput.email,
              age: +this.formInput.age,
              id: user.id,
              password: user.password,
              salt: user.salt,
              friends: user.friends,
              games: user.games,
            };
            // Save Changes
            this.usersService.putUser(changedUser);
            // Reload new data
            this.userProfile$ = this.usersService.getUser(user.id);
            // back profile
            this.editMode = false;
          }
        });
    }
  }

  ngOnInit(): void {}
}
