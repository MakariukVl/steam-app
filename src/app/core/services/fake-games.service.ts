import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { GAMES_MOCKED_DATA } from '@core/mocks/games-mocked-data.mock';
import { USERS_MOCKED_DATA } from '@core/mocks/users-mocked-data.mock';
import { GameTagTypes } from '@core/models/game-tag-types.model';
import { GameModel } from '@core/models/game.model';
import { UserModel } from '@core/models/user.model';
import { filter, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
  // providedIn: CoreModule,
})
export class FakeGamesService {
  constructor() {}

  // games for guests
  getGames(): Observable<GameModel[]> {
    return of(GAMES_MOCKED_DATA).pipe(take(1));
  }

  // search for guests
  searchGames(params: {
    search: string;
    tags: GameTagTypes[];
    price?: number;
    isMaxed: boolean;
  }): Observable<GameModel[]> {
    const gamesFound = GAMES_MOCKED_DATA.filter((g) => {
      /* search string have (partial) match with game`s name */
      let match = g.name.toLowerCase().includes(params.search);
      let optional = true;

      /* game`s tag is in query tags */
      if (g.tag && params.tags?.length) {

        optional = optional && params.tags.includes(g.tag);
      } else { /* If no tags selected - no games returned */
        optional = false;
      }

      /* game`s price less-equal query`s (if included in query) */
      if (!params.isMaxed && params.price) {

        optional = optional && g.price <= params.price;
      }

      // console.log('called');
      return match && optional;
    });
    return of(gamesFound).pipe(take(1));
  }

  // search for authorized users
  searchGamesFor(
    userId: number,
    params: {
      search: string;
      tags: GameTagTypes[];
      price: number;
      isMaxed: boolean;
    }
  ): Observable<GameModel[]> {

    const profile: UserModel | undefined = USERS_MOCKED_DATA.find(
      (u) => u.id === userId
    );
    const gamesFound = GAMES_MOCKED_DATA.filter((g) => {
      /* search string have (partial) match with game`s name */
      let match = g.name.toLocaleLowerCase().includes(params.search);
      let optional = true;

      /* game`s tag is in query tags */
      if (g.tag && params.tags?.length) {

        optional = optional && params.tags.includes(g.tag);
      } else { /* If no tags selected - no games returned */
        optional = false;
      }

      /* game`s price less-equal query`s (if included in query) */
      if (!params.isMaxed && params.price) {

        optional = optional && g.price <= params.price;
      }

      /* exclude games, user already add */
      if (profile && profile.games) {

        match = match && !profile.games.has(g.id);
      }
      // console.log('called');

      return match && optional;
    });
    return of(gamesFound).pipe(take(1));
  }

  // get games that already in library
  getGamesLib(userId: number): Observable<GameModel[]> {
    const profile: UserModel | undefined = USERS_MOCKED_DATA.find(
      (u) => u.id === userId
    );
    let games: GameModel[];
    if (profile?.games) {
      games = GAMES_MOCKED_DATA.filter(
        (g) => profile.games.has(g.id) // find all games that id contains in my games list
      ) as GameModel[];
    } else {
      games = [];
    }
    console.log('lib called');
    return of(games).pipe(take(1));
  }

  // get games to add in library for authorized users. No filters
  getGamesFor(userId: number): Observable<GameModel[]> {
    const profile: UserModel | undefined = USERS_MOCKED_DATA.find(
      (u) => u.id === userId
    );
    let games: GameModel[];
    if (profile?.games) {
      games = GAMES_MOCKED_DATA.filter(
        (g) => !profile.games.has(g.id) // find all games that id not in user`s games list
      ) as GameModel[];
    } else {
      games = [];
    }
    return of(games).pipe(take(1));
  }

  addGame(userId: number, gameId: number): boolean {
    const userIndex = USERS_MOCKED_DATA.findIndex((u) => u.id === userId);
    const gameIndex = GAMES_MOCKED_DATA.findIndex((g) => g.id === gameId);
    let success = false;

    if (userIndex > -1 && gameIndex > -1) {
      // add a game to yours account
      USERS_MOCKED_DATA[userIndex].games.add(gameIndex);
      success = true;
    }
    return success;
  }

  removeGame(userId: number, gameId: number): boolean {
    const userIndex = USERS_MOCKED_DATA.findIndex((u) => u.id === userId);
    let success = false;

    if (userIndex > -1) {
      // remove a game from yours account
      USERS_MOCKED_DATA[userIndex].friends.delete(gameId);
      success = true;
    }
    return success;
  }
}
