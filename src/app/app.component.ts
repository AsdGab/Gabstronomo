import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

/*
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  constructor(
    private dishesService: DishesFirestoreService,
    private dialog: MatDialog
  ) {
    const aCollection = collection(this.firestore, 'dishes');
    this.items$ = collectionData(aCollection);
  }

  addDish(): void {
    let dish = { id: 'asd', name: 'Torreznos', price: 6 };

    console.log(dish);
    this.dishesService.create(dish);
  }

  selectDish(dish: Dish) {
    this.dishEmitter.emit(dish);
    console.log('asd');
  }

  getDialog(dish: Dish) {
    this.dialog.open(BasicDialogComponent, { data: dish });
  }
  */
