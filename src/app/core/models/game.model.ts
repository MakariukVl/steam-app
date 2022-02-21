import { CurrencyCodes } from "./currency-code.model";
import { GameTagTypes } from "./game-tag-types.model";

export interface GameModel {
  id: number;
  price: number;
  name: string;
  description: string;
  tag?: GameTagTypes;
  currencyCode: CurrencyCodes;
}
