import { Component, OnInit } from '@angular/core';
import { PersonModel } from '@core/models/person.model';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { UserModel } from '@core/models/user.model';
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
  isSearch: boolean = false;
  signedUser: UserCredentialsModel | null;
  friends$: Observable<PersonModel[]>;
  search$: Observable<UserModel[]>;
  searchText?: string;

  constructor(
    private usersService: FakeUsersService,
    private authService: AuthService
  ) {
    this.isAuthorized = !!authService.signedUser;
    this.signedUser = authService.signedUser;
    this.friends$ = this.signedUser
      ? usersService.getFriends(this.signedUser.id)
      : of([]);
    this.search$ = of([]);
  }

  onSubmit(search: string) {
    if (search === '') {
      this.isSearch = false;
      return;
    }

    // show search result for non-empty search query
    this.searchText = search;
    this.isSearch = true;
    this.search$ = this.usersService.getUsersBy((user) =>
      user.name.includes(search)
    );
  }

  ngOnInit(): void {}

  onRemove(friend: PersonModel) {
    if (this.signedUser) {
      // remove at API
      const success = this.usersService.removeFriend(
        this.signedUser.id,
        friend.id
      );
      // get new friends$ API call & redraw
      if (success && !this.isSearch) {
        this.friends$ = this.signedUser
          ? this.usersService.getFriends(this.signedUser.id)
          : of([]);
      }
      // or get new search$ API call & redraw
      if (success && this.isSearch) {
        this.search$ = this.usersService.getUsersBy((user) =>
          user.name.includes(this.searchText || '')
        );
      }
    }
  }

  onAdd(friend: PersonModel) {
    if (this.signedUser) {
      // remove at API
      const success = this.usersService.addFriend(
        this.signedUser.id,
        friend.id
      );
      // get new search$ API call & redraw
      if (success && this.isSearch) {
        this.search$ = this.usersService.getUsersBy((user) =>
          user.name.includes(this.searchText || '')
        );
      }
    }
  }
}
