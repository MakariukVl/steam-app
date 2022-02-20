import { GameModel } from "./game.model";
import { PersonModel } from "./person.model";

export interface UserModel extends PersonModel {
  friends: PersonModel[],
  games: GameModel[]
}