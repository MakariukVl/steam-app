import { Injectable } from '@angular/core';
import { USERS_MOCKED_DATA } from '@core/mocks/users-mocked-data.mock';
import { PersonModel } from '@core/models/person.model';
import { UserCredentialsModel } from '@core/models/user-credentials.model';
import { UserModel } from '@core/models/user.model';
import { Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
  // providedIn: CoreModule,
})
export class FakeUsersService {
  constructor() {}

  getUsers(): Observable<UserModel[]> {
    return of(USERS_MOCKED_DATA).pipe(take(1)); // delay(1000) - emulate slow network
  }

  getUser(userId: number): Observable<UserModel | undefined> {
    const user = USERS_MOCKED_DATA.find((u) => u.id === userId);
    return of(user).pipe(take(1));
  }

  getUsersBy(callback: (user: UserModel) => boolean): Observable<UserModel[]> {
    const usersFound = USERS_MOCKED_DATA.filter((u) => callback(u));
    return of(usersFound).pipe(take(1));
  }

  getCredentionalBy(email: string): Observable<UserCredentialsModel[]> {
    const usersFound: UserCredentialsModel[] = USERS_MOCKED_DATA.filter(
      (u) => u.email === email
    );
    return of(usersFound).pipe(take(1));
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

  getFriends(userId: number): Observable<PersonModel[]> {
    const profile: UserModel | undefined = USERS_MOCKED_DATA.find(
      (u) => u.id === userId
    );
    let friends: PersonModel[];
    if (profile?.friends) {
      friends = USERS_MOCKED_DATA.filter(
        (u) => profile.friends.has(u.id) // find all users that id contains in my friends list
      ) as PersonModel[];
    } else {
      friends = [];
    }
    console.log('friends called');
    return of(friends).pipe(take(1));
  }

  getPersonBy(
    callback: (person: PersonModel) => boolean
  ): Observable<PersonModel[]> {
    const personsFound = USERS_MOCKED_DATA.filter((u) => callback(u)).map(
      (u) => u as PersonModel
    );
    return of(personsFound).pipe(take(1));
  }

  addFriend(userId: number, friendId: number): boolean {
    const userIndex = USERS_MOCKED_DATA.findIndex((u) => u.id === userId);
    const friendIndex = USERS_MOCKED_DATA.findIndex((u) => u.id === friendId);
    let success = false;

    if (userIndex > -1 && friendIndex > -1) {
      // add a friend to both your and your new friend account
      USERS_MOCKED_DATA[userIndex].friends.add(friendIndex);
      USERS_MOCKED_DATA[friendIndex].friends.add(userIndex);
      success = true;
    }
    return success;
  }

  removeFriend(userId: number, friendId: number): boolean {
    const userIndex = USERS_MOCKED_DATA.findIndex((u) => u.id === userId);
    const friendIndex = USERS_MOCKED_DATA.findIndex((u) => u.id === friendId);
    let success = false;

    if (userIndex > -1 && friendIndex > -1) {
      // remove a friend from both yours and friend's account
      USERS_MOCKED_DATA[userIndex].friends.delete(friendIndex);
      USERS_MOCKED_DATA[friendIndex].friends.delete(userIndex);
      success = true;
    }
    return success;
  }
}
