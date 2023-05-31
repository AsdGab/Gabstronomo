import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order } from 'src/app/models/orderModel';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-k-dashboard',
  templateUrl: './k-dashboard.component.html',
  styleUrls: ['./k-dashboard.component.scss'],
})
export class KDashboardComponent implements OnInit {
  newOrders$: Observable<Order[]> | undefined;
  finishedOrders$: Observable<Order[]> | undefined;
  pageDisplay: string = 'new';

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  async getOrders(): Promise<void> {
    this.newOrders$ = this.ordersService.getWithDishesAndNew();
    this.finishedOrders$ = this.ordersService.getWithDishesAndFinished();
  }

  async updateOrder(order: Order, state: string) {
    this.ordersService.updateDishesState(order, state);
  }

  stateForwardOrder(order: Order) {
    let state: string = 'En proceso';

    this.updateOrder(order, state);
  }

  stateBackOrder(order: Order) {
    let state: string = 'Nueva';

    this.updateOrder(order, state);
  }

  finishedOrder(order: Order) {
    let state: string = 'Finalizada';

    this.updateOrder(order, state);
  }
}
