import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { FakeUsersService } from '@core/services/fake-users.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss'],
})
export class FriendsPageComponent implements OnInit {
  constructor(
    private usersService: FakeUsersService,
    private authService: AuthService
  ) {}

  onSubmit(search: string) {
    //
  }

  ngOnInit(): void {}
}
