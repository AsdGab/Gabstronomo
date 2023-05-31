import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dish } from 'src/app/models/dishModel';
import { Drink } from 'src/app/models/drinkModel';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss'],
})
export class ItemDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public item: Dish | Drink) {}
}
