import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  doc,
  docData,
  getDoc,
} from '@angular/fire/firestore';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
} from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Dish } from 'src/app/models/dishModel';

@Injectable({
  providedIn: 'root',
})
export class DishesFirestoreService {
  private dishesCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.dishesCollection = collection(this.firestore, 'dishes');
  }

  getAll(): Observable<any[]> {
    let items$: Observable<any>;

    const coll = collection(this.firestore, 'dishes');

    items$ = collectionData(coll);

    return items$;
  }

  create(dish: Dish) {
    return addDoc(this.dishesCollection, dish);
  }

  /*

    getAll() {
    return collectionData(this.dishesCollection, {
      idField: 'id',
    }) as Observable<Dish[]>;
  }

  get(id: string) {
    const dishesDocumentReference = doc(this.firestore, `dishes/${id}`);
    return docData(dishesDocumentReference, { idField: 'uID' });
  }

  update(dish: Dish) {
    const dishDocumentReference = doc(this.firestore, `dishes/${dish.id}`);
    return updateDoc(dishDocumentReference, { ...dish });
  }

  delete(id: string) {
    const dishDocumentReference = doc(this.firestore, `dishes/${id}`);
    return deleteDoc(dishDocumentReference);
  }
  */
}
