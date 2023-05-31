import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dish } from 'src/app/models/dishModel';
import { Drink } from 'src/app/models/drinkModel';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-m-drawer',
  templateUrl: './m-drawer.component.html',
  styleUrls: ['./m-drawer.component.scss'],
})
export class MDrawerComponent {
  @Input() selectedDishes: Dish[] = [];
  @Input() selectedDrinks: Drink[] = [];
  @Input() orderPrice: number = 0;
  @Input() drawerType: string = '';
  @Input() totalDishes: Dish[] = [];
  @Input() totalDrinks: Drink[] = [];
  @Input() totalPrice: number = 0;
  @Output() resetCurrentOrder: EventEmitter<void> = new EventEmitter<void>();
  @Output() addDish: EventEmitter<Dish> = new EventEmitter<Dish>();
  @Output() addDrink: EventEmitter<Drink> = new EventEmitter<Drink>();
  @Output() removeDish: EventEmitter<Dish> = new EventEmitter<Dish>();
  @Output() removeDrink: EventEmitter<Drink> = new EventEmitter<Drink>();
  @Output() payOrders: EventEmitter<void> = new EventEmitter<void>();
  @Output() placeOrder: EventEmitter<void> = new EventEmitter<void>();

  constructor(public confirmationDialog: MatDialog) {}

  // Total Order
  payOrdersEmitter(): void {
    this.payOrders.emit();
  }

  // Current Order
  addItemEmitter(type: string, item: Dish | Drink): void {
    if (type == 'dishes') this.addDish.emit(item);
    if (type == 'drinks') this.addDrink.emit(item);
  }

  removeItemEmitter(type: string, item: Dish | Drink): void {
    if (type == 'dishes') this.removeDish.emit(item);
    if (type == 'drinks') this.removeDrink.emit(item);
  }

  resetOrderEmitter() {
    this.resetCurrentOrder.emit();
  }

  placeOrderEmitter() {
    this.placeOrder.emit();
  }

  openOrderDialog(): void {
    this.confirmationDialog
      .open(ConfirmationDialogComponent, {
        data: {
          questionBold: 'pedido',
          confirmation1: '¡El pedido ha sido confirmado!',
          confirmation2: 'En cuanto esté preparado, se lo llevarán a su mesa',
        },
        width: '350px',
        height: '250px',
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.placeOrderEmitter();
        }
      });
  }

  openPaymentDialog(): void {
    this.confirmationDialog
      .open(ConfirmationDialogComponent, {
        data: {
          questionBold: 'pago',
          confirmation1: 'Imprimiendo ticket...',
          confirmation2: 'Pase por la caja para efectual el pago',
        },
        width: '350px',
        height: '250px',
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.payOrdersEmitter();
        }
      });
  }
}
