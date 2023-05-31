import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Dish } from '../models/dishModel';
import { Drink } from '../models/drinkModel';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private firestore: Firestore) {}

  getItems(itemType: string): Observable<Dish[] | Drink[]> {
    const coll = collection(this.firestore, itemType);

    return collectionData(coll) as Observable<Dish[] | Drink[]>;
  }

  getItemByRef(itemType: string, id: string) {
    let docRef = doc(this.firestore, itemType, id);
    let docSnap = getDoc(docRef);
    return docSnap;
  }
}
