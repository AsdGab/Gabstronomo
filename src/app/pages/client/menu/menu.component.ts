import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { Dish } from 'src/app/models/dishModel';
import { Drink } from 'src/app/models/drinkModel';
import { Order } from 'src/app/models/orderModel';
import { Ticket } from 'src/app/models/ticketModel';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { TicketsService } from 'src/app/services/tickets/tickets.service';
import { TableDialogComponent } from '../sub/table-dialog/table-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  type1: string = 'dishes';
  type2: string = 'drinks';
  drawerType: string = '';
  table: number = 0;

  selectedDishes: Dish[] = [];
  selectedDrinks: Drink[] = [];
  orderPrice: number = 0;

  orders$: Observable<Order[]> | undefined;
  totalDishes: Dish[] = [];
  totalDrinks: Drink[] = [];
  totalPrice: number = 0;

  async ngOnInit() {
    this.openTableDialog();
    this.getOrders();
  }

  constructor(
    private ordersService: OrdersService,
    private ticketsService: TicketsService,
    private tableDialog: MatDialog
  ) {}

  getOrders() {
    this.orders$ = this.ordersService.getNotPaid();
  }

  // Total Order
  unifyOrders(): void {
    this.totalDishes = [];
    this.totalDrinks = [];
    this.totalPrice = 0;

    this.orders$
      ?.pipe(
        map((value) => {
          value.forEach((order) => {
            this.checkSameProductOrders('dishes', order.orderedDishes);
            this.checkSameProductOrders('drinks', order.orderedDrinks);
            this.totalPrice += order.totalPrice;
          });
        })
      )
      .subscribe();
  }

  checkSameProductOrders(type: string, products: Dish[] | Drink[]) {
    if (type == 'dishes') {
      products.forEach((element) => {
        let index = this.totalDishes.findIndex(
          (item) => item.uID === element.uID
        );

        index == -1
          ? this.totalDishes.push(element)
          : (this.totalDishes[index].quantity! += element.quantity!);
      });
    }

    if (type == 'drinks') {
      products.forEach((element) => {
        let index = this.totalDrinks.findIndex(
          (item) => item.uID === element.uID
        );

        index == -1
          ? this.totalDrinks.push(element)
          : (this.totalDrinks[index].quantity! += element.quantity!);
      });
    }
  }

  payOrders() {
    let newTicket: Ticket = new Ticket(
      this.totalDishes,
      this.totalDrinks,
      this.totalPrice
    );
    this.ordersService.updatePaid();
    this.ticketsService.create(newTicket);
  }

  // Current Order
  addDish(dish: Dish): void {
    let index = this.selectedDishes.findIndex((item) => item.uID == dish.uID);

    index == -1
      ? (dish['quantity'] = 1) && this.selectedDishes.push(dish)
      : this.selectedDishes[index].quantity!++;

    this.calculateOrderPrice();
  }

  addDrink(drink: Drink): void {
    let index = this.selectedDrinks.findIndex((item) => item.uID == drink.uID);

    index == -1
      ? (drink['quantity'] = 1) && this.selectedDrinks.push(drink)
      : this.selectedDrinks[index].quantity!++;

    this.calculateOrderPrice();
  }

  removeDish(dish: Dish) {
    let index = this.selectedDishes.findIndex((item) => item.uID === dish.uID);

    this.selectedDishes[index].quantity === 1
      ? (this.selectedDishes = this.selectedDishes.filter(
          (product) => product.uID !== dish.uID
        ))
      : this.selectedDishes[index].quantity!--;

    this.calculateOrderPrice();
  }

  removeDrink(drink: Drink) {
    let index = this.selectedDrinks.findIndex((item) => item.uID === drink.uID);

    this.selectedDrinks[index].quantity === 1
      ? (this.selectedDrinks = this.selectedDrinks.filter(
          (product) => product.uID !== drink.uID
        ))
      : this.selectedDrinks[index].quantity!--;

    this.calculateOrderPrice();
  }

  calculateOrderPrice(): void {
    let money: number = 0;

    this.selectedDishes.forEach((res) => {
      money = money + res.price * res.quantity!;
    });
    this.selectedDrinks.forEach((res) => {
      money = money + res.price * res.quantity!;
    });

    this.orderPrice = money;
  }

  placeOrder(): void {
    let newOrder: Order = new Order(
      this.selectedDishes,
      this.selectedDrinks,
      this.orderPrice
    );

    this.ordersService.create(newOrder);
    this.resetCurrentOrder();
  }

  resetCurrentOrder() {
    this.selectedDishes = [];
    this.selectedDrinks = [];
    this.orderPrice = 0;
  }

  openTableDialog() {
    this.tableDialog
      .open(TableDialogComponent, { disableClose: true })
      .afterClosed()
      .subscribe((table: number) => {
        this.table = table;
      });
  }
}
