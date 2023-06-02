import { Dish } from './dishModel';
import { Drink } from './drinkModel';

export class Ticket {
  uID: string;
  orderedDishes: Dish[];
  orderedDrinks: Drink[];
  totalPrice: number;

  public constructor(
    orderedDishes: Dish[],
    orderedDrinks: Drink[],
    totalPrice: number
  ) {
    this.uID = Date.now().toString();
    this.orderedDishes = orderedDishes;
    this.orderedDrinks = orderedDrinks;
    this.totalPrice = totalPrice;
  }
}
