import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/orderModel';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-d-dashboard',
  templateUrl: './d-dashboard.component.html',
  styleUrls: ['./d-dashboard.component.scss'],
})
export class DDashboardComponent implements OnInit {
  newOrders$: Observable<Order[]> | undefined;
  finishedOrders$: Observable<Order[]> | undefined;
  pageDisplay: string = 'new';

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  async getOrders(): Promise<void> {
    this.newOrders$ = this.ordersService.getWithDrinksAndNew();
    this.finishedOrders$ = this.ordersService.getWithDrinksAndFinished();
  }

  async updateOrder(order: Order, state: string) {
    this.ordersService.updateDrinksState(order, state);
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
