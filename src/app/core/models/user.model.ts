import { GameModel } from "./game.model";
import { PersonModel } from "./person.model";
import { UserCredentialsModel } from "./user-credentials.model";

export interface UserModel extends PersonModel, UserCredentialsModel {
  friends: number[],
  games: number[]
}