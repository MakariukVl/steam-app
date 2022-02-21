import { Injectable } from '@angular/core';
import { USERS_MOCKED_DATA } from '@core/mocks/users-mocked-data.mock';
import { UserModel } from '@core/models/user.model';
import { Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeUsersService {
  constructor() {}

  getUsers(): Observable<UserModel[]> {
    return of(USERS_MOCKED_DATA).pipe(take(1));
  }

  getUser(userId: number): Observable<UserModel | undefined> {
    const user = USERS_MOCKED_DATA.find((u) => u.id === userId);
    return of(user).pipe(take(1));
  }

  putUser(user: UserModel): Observable<UserModel | undefined> {
    const userToUpdateIndex = USERS_MOCKED_DATA.findIndex(
      (u) => u.id === user.id
    );
    if (userToUpdateIndex > -1) {
      USERS_MOCKED_DATA[userToUpdateIndex] = user;
    }
    return of(USERS_MOCKED_DATA[userToUpdateIndex]).pipe(take(1));
  }

  // addFriend(userId: number, friendId: number)
}
