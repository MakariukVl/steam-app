import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileFormModel } from '@core/models/profile-form.model';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { AuthService } from '@core/services/auth.service';
import { FakeUsersService } from '@core/services/fake-users.service';

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
  status: string;
  isAuthenticated: boolean;

  /*private route: ActivatedRoute*/
  constructor(
    private authService: AuthService,
    private usersService: FakeUsersService
  ) {
    // console.log(route.snapshot.url.toString()); //profile
    this.signedUser = authService.signedUser;
    this.status = authService.status;
    this.isAuthenticated = !!authService.signedUser;
  }

  onSubmit() {}

  ngOnInit(): void {
    //TODO autofill
    if (this.authService.signedUser) {
      this.usersService
        .getUser(this.authService.signedUser.id)
        .subscribe((user) => {
          this.formInput.username = user?.name || '';
          this.formInput.email = user?.email || '';
          this.formInput.age = '' + user?.age;
        });
    }
  }
}
