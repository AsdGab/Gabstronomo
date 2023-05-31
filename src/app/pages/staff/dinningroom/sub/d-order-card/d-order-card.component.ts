import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/models/orderModel';
import { DConfirmationDialogComponent } from '../d-confirmation-dialog/d-confirmation-dialog.component';

@Component({
  selector: 'app-d-order-card',
  templateUrl: './d-order-card.component.html',
  styleUrls: ['./d-order-card.component.scss'],
})
export class DOrderCardComponent {
  @Input() item?: Order;
  @Output() stateForwardOrder: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() stateBackOrder: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() finishedOrder: EventEmitter<Order> = new EventEmitter<Order>();

  constructor(public confirmationDialog: MatDialog) {}

  advanceState(): void {
    this.item?.drinksState == 'Nueva'
      ? (this.item!.drinksState = 'En proceso')
      : (this.item!.drinksState = '');
  }

  backState(): void {
    this.item?.drinksState == 'En proceso'
      ? (this.item!.drinksState = 'Nueva')
      : (this.item!.drinksState = '');
  }

  stateForwardOrderEmitter(order: Order) {
    this.stateForwardOrder.emit(order);
  }

  stateBackOrderEmitter(order: Order) {
    this.stateBackOrder.emit(order);
  }

  finishedOrderEmitter(order: Order) {
    this.finishedOrder.emit(order);
  }

  openFinishedDialog(order: Order): void {
    this.confirmationDialog
      .open(DConfirmationDialogComponent, { data: '¿Has finalizado la orden?' })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.finishedOrderEmitter(order);
        }
      });
  }

  openUnfinishedDialog(order: Order): void {
    this.confirmationDialog
      .open(DConfirmationDialogComponent, {
        data: '¿Quieres añadir la orden a la cola nuevamente?',
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.stateForwardOrderEmitter(order);
        }
      });
  }
}
