import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Dish } from 'src/app/models/dishModel';
import { Drink } from 'src/app/models/drinkModel';
import { GlobalService } from 'src/app/services/global.service';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss'],
})
export class MenuSectionComponent implements OnInit {
  @Input() itemType: string = '';
  @Input() itemList: Dish[] | Drink[] = [];
  @Output() addDish: EventEmitter<Dish> = new EventEmitter<Dish>();
  @Output() addDrink: EventEmitter<Drink> = new EventEmitter<Drink>();
  @Output() removeDish: EventEmitter<Dish> = new EventEmitter<Dish>();
  @Output() removeDrink: EventEmitter<Drink> = new EventEmitter<Drink>();

  orderedItem: string = '';

  items$?: Observable<Dish[] | Drink[]>;

  async ngOnInit(): Promise<void> {
    this.getItems(this.itemType);
  }

  constructor(
    private itemsService: GlobalService,
    public itemDialog: MatDialog
  ) {}

  getItems(type: string): void {
    this.items$ = this.itemsService.getItems(type) as Observable<
      Dish[] | Drink[]
    >;
  }

  addItemEmitter(type: string, item: Dish | Drink): void {
    if (type == 'dishes') this.addDish.emit(item);
    if (type == 'drinks') this.addDrink.emit(item);
  }

  removeItemEmitter(type: string, item: Dish | Drink): void {
    if (type == 'dishes') this.removeDish.emit(item);
    if (type == 'drinks') this.removeDrink.emit(item);
  }

  disableIfEmpty(item: Dish | Drink): boolean {
    return this.itemList.find((product) => product.uID === item.uID) ===
      undefined
      ? true
      : false;
  }

  openItemDialog(item: Dish | Drink): void {
    this.itemDialog
      .open(ItemDialogComponent, {
        data: item,
        width: '500px',
        height: '400px',
      })
      .afterClosed()
      .subscribe(() => {});
  }
}
