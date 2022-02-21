import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { USERS_MOCKED_DATA } from '@core/mocks/users-mocked-data.mock';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { UserModel } from '@core/models/user.model';
import { delay, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
  // providedIn: CoreModule,
})
export class FakeUsersService {
  constructor() {}

  getUsers(): Observable<UserModel[]> {
    return of(USERS_MOCKED_DATA).pipe(delay(1000), take(1));
  }

  getUser(userId: number): Observable<UserModel | undefined> {
    const user = USERS_MOCKED_DATA.find((u) => u.id === userId);
    return of(user).pipe(delay(1000), take(1));
  }

  getUsersBy(callback: (user: UserModel) => boolean): Observable<UserModel[]> {
    const usersFound = USERS_MOCKED_DATA.filter((u) => callback(u));
    return of(usersFound).pipe(delay(1000), take(1));
  }

  getCredentionalBy(email: string): Observable<UserCredentialsModel[]> {
    const usersFound: UserCredentialsModel[] = USERS_MOCKED_DATA.filter((u) => u.email === email);
    return of(usersFound).pipe(delay(1000), take(1));
  }

  putUser(user: UserModel): Observable<UserModel | undefined> {
    const userToUpdateIndex = USERS_MOCKED_DATA.findIndex(
      (u) => u.id === user.id
    );
    if (userToUpdateIndex > -1) {
      USERS_MOCKED_DATA[userToUpdateIndex] = user;
    }
    return of(USERS_MOCKED_DATA[userToUpdateIndex]).pipe(delay(1000), take(1));
  }

  // addFriend(userId: number, friendId: number)
}
