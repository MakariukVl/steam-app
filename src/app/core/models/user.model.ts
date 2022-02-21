import { PersonModel } from "./person.model";
import { UserCredentialsModel } from "./user-credentials.model";

export interface UserModel extends PersonModel, UserCredentialsModel {
  friends: Set<number>,
  games: Set<number>
}