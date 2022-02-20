import { CurrencyCodes } from "./currency-code.model";

export interface GameModel {
  id: number;
  price: number;
  name: string;
  description: string;
  tag?: string;
  currencyCode: CurrencyCodes;
}
