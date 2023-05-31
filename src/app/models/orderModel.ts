import { Drink } from './drinkModel';
import { Dish } from './dishModel';

export interface Order {
  uID: string;
  orderedDishes: Dish[];
  orderedDrinks: Drink[];
  totalPrice: number;
  paid: boolean;
  dishesState: string;
  drinksState: string;
}
