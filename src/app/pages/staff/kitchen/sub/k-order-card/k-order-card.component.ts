import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/models/orderModel';
import { KConfirmationDialogComponent } from '../k-confirmation-dialog/k-confirmation-dialog.component';

@Component({
  selector: 'app-k-order-card',
  templateUrl: './k-order-card.component.html',
  styleUrls: ['./k-order-card.component.scss'],
})
export class KOrderCardComponent {
  @Input() item?: Order;
  @Output() stateForwardOrder: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() stateBackOrder: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() finishedOrder: EventEmitter<Order> = new EventEmitter<Order>();

  constructor(public confirmationDialog: MatDialog) {}

  advanceState(): void {
    this.item?.dishesState == 'Nueva'
      ? (this.item!.dishesState = 'En proceso')
      : (this.item!.dishesState = '');
  }

  backState(): void {
    this.item?.dishesState == 'En proceso'
      ? (this.item!.dishesState = 'Nueva')
      : (this.item!.dishesState = '');
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
      .open(KConfirmationDialogComponent, { data: '¿Has finalizado la orden?' })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.finishedOrderEmitter(order);
        }
      });
  }

  openUnfinishedDialog(order: Order): void {
    this.confirmationDialog
      .open(KConfirmationDialogComponent, {
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
