import { Component, OnInit } from '@angular/core';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent implements OnInit {
  isAuthorized: boolean;
  signedUser: UserCredentialsModel | null;

  constructor(private authService: AuthService) {
    this.isAuthorized = !!authService.signedUser;
    this.signedUser = authService.signedUser;
  }

  ngOnInit(): void {}
}
