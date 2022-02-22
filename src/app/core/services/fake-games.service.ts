import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { GAMES_MOCKED_DATA } from '@core/mocks/games-mocked-data.mock';
import { GameModel } from '@core/models/game.model';
import { Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
  // providedIn: CoreModule,
})
export class FakeGamesService {
  constructor() {}

  getGames(): Observable<GameModel[]> {
    return of(GAMES_MOCKED_DATA).pipe(take(1));
  }

  getGamesByIds(gameIds: number[]): Observable<GameModel[]> {
    const gamesFound = GAMES_MOCKED_DATA.filter((g) => gameIds.includes(g.id));
    return of(gamesFound).pipe(take(1));
  }

  searchGamesByName(gameName: string): Observable<GameModel[]> {
    const gamesFound = GAMES_MOCKED_DATA.filter((g) =>
      g.name.toLowerCase().includes(gameName.toLowerCase())
    );
    return of(gamesFound).pipe(take(1));
  }
}
