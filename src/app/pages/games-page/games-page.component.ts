import { Component, OnInit } from '@angular/core';
import { GameTagTypes } from '@core/models/game-tag-types.model';
import { GameModel } from '@core/models/game.model';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { AuthService } from '@core/services/auth.service';
import { FakeGamesService } from '@core/services/fake-games.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent implements OnInit {
  isAuthorized: boolean;
  isSearch: boolean = false;
  signedUser: UserCredentialsModel | null;
  games$: Observable<GameModel[]>;
  search$: Observable<GameModel[]>;
  filter!: {
    searchText: string;
    tags: Set<GameTagTypes>;
    price: number;
    isMaxed: boolean;
  };

  constructor(
    private authService: AuthService,
    private gamesService: FakeGamesService
  ) {
    this.isAuthorized = !!authService.signedUser;
    this.signedUser = authService.signedUser;
    this.filter = {
      searchText: '',
      tags: new Set<GameTagTypes>(['Indie', 'Action', 'Adventure']),
      price: 0,
      isMaxed: false,
    };
    this.search$ = of([]);
    this.search$ = this.signedUser
      ? gamesService.searchGamesFor(this.signedUser.id, {
          search: this.filter.searchText,
          tags: [...this.filter.tags],
          price: this.filter.price,
          isMaxed: this.filter.isMaxed,
        }) //authorized user
      : gamesService.searchGames({
          search: this.filter.searchText,
          tags: [...this.filter.tags],
          price: this.filter.price,
          isMaxed: this.filter.isMaxed,
        }); // guest
    this.search$ = of([]);
    this.games$ = !!this.signedUser
      ? gamesService.getGamesFor(this.signedUser.id) //authorized user
      : gamesService.getGames(); // guest
  }

  ngOnInit(): void {
    this.reloadData(); // unexplicit renew this.search$
  }

  onSubmit(search: string) {
    // show search result for non-empty search query
    this.filter.searchText = search ? search.toLowerCase() : '';
    this.isSearch = true;
    this.reloadData();
  }

  onClick(userId: number) {
    //TODO Card click -> add to user`s library
  }

  onChecked(checked: boolean, tag: GameTagTypes) {
    if (checked) {
      this.filter.tags.add(tag);
    } else {
      this.filter.tags.delete(tag);
    }
    this.reloadData();
  }

  reloadData(): void {
    /* authorized user */
    if (this.signedUser) {
      this.search$ = this.gamesService.searchGamesFor(this.signedUser?.id, {
        search: this.filter.searchText,
        tags: [...this.filter.tags],
        price: this.filter.price,
        isMaxed: this.filter.isMaxed,
      });
    } else {
      /* guest */
      this.search$ = this.gamesService.searchGames({
        search: this.filter.searchText,
        tags: [...this.filter.tags],
        price: this.filter.price,
        isMaxed: this.filter.isMaxed,
      });
    }
  }
}
