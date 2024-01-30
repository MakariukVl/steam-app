import { Component, OnInit } from '@angular/core';
import { GameModel } from '@core/models/game.model';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { AuthService } from '@core/services/auth.service';
import { FakeGamesService } from '@core/services/fake-games.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss'],
})
export class LibraryPageComponent implements OnInit {
  isAuthorized: boolean;
  signedUser: UserCredentialsModel | null;
  games$: Observable<GameModel[]>;

  constructor(
    private authService: AuthService,
    private gamesService: FakeGamesService
  ) {
    this.isAuthorized = !!authService.signedUser;
    this.signedUser = authService.signedUser;
    this.games$ = this.signedUser
      ? gamesService.getGamesLib(this.signedUser.id)
      : of([]);
  }

  ngOnInit(): void {}
}
