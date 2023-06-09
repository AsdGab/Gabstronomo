import { Drink } from './drinkModel';
import { Dish } from './dishModel';

export class Order {
  uID: string;
  orderedDishes: Dish[];
  orderedDrinks: Drink[];
  totalPrice: number;
  paid: boolean;
  dishesState: string;
  drinksState: string;

  public constructor(
    orderedDishes: Dish[],
    orderedDrinks: Drink[],
    totalPrice: number
  ) {
    this.uID = Date.now().toString();
    this.orderedDishes = orderedDishes;
    this.orderedDrinks = orderedDrinks;
    this.totalPrice = totalPrice;
    this.paid = false;
    this.dishesState = orderedDishes.length > 0 ? 'Nueva' : 'Finalizada';
    this.drinksState = orderedDrinks.length > 0 ? 'Nueva' : 'Finalizada';
  }
}
