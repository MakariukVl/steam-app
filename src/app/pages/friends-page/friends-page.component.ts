import { Component, OnInit } from '@angular/core';
import { PersonModel } from '@core/models/person.model';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { AuthService } from '@core/services/auth.service';
import { FakeUsersService } from '@core/services/fake-users.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss'],
})
export class FriendsPageComponent implements OnInit {
  isAuthorized: boolean;
  signedUser: UserCredentialsModel | null;
  friends$: Observable<PersonModel[]>;

  constructor(
    private usersService: FakeUsersService,
    private authService: AuthService
  ) {
    this.isAuthorized = !!authService.signedUser;
    this.signedUser = authService.signedUser;
    this.friends$ = this.signedUser
      ? usersService.getFriends(this.signedUser.id)
      : of([]);
  }

  onSubmit(search: string) {
    //
  }

  ngOnInit(): void {}
}
