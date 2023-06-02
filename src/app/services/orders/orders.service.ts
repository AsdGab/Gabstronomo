import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  collection,
  collectionData,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Order } from 'src/app/models/orderModel';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private ordersCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.ordersCollection = collection(this.firestore, 'orders');
  }

  getAll(): Observable<any[]> {
    let orders$: Observable<any[]>;

    const coll = collection(this.firestore, 'orders');

    orders$ = collectionData(coll);

    return orders$;
  }

  getNotPaid(): Observable<any[]> {
    let orders$: Observable<any[]>;

    const coll = query(
      collection(this.firestore, 'orders'),
      where('paid', '==', false)
    );

    orders$ = collectionData(coll);

    return orders$;
  }

  getWithDishesAndNew(): Observable<any[]> {
    let orders$: Observable<any[]>;

    const q = query(
      collection(this.firestore, 'orders'),
      where('orderedDishes', '!=', [])
    );

    orders$ = collectionData(q).pipe(
      map((res: any) => {
        return res.filter((data: any) => data.dishesState != 'Finalizada');
      })
    );

    return orders$;
  }

  getWithDishesAndFinished(): Observable<any[]> {
    let orders$: Observable<any[]>;

    const q2 = query(
      collection(this.firestore, 'orders'),
      where('orderedDishes', '!=', [])
    );

    orders$ = collectionData(q2).pipe(
      map((res: any) => {
        return res.filter((data: any) => data.dishesState == 'Finalizada');
      })
    );

    return orders$;
  }

  getWithDrinksAndNew(): Observable<any[]> {
    let orders$: Observable<any[]>;

    const q = query(
      collection(this.firestore, 'orders'),
      where('orderedDrinks', '!=', [])
    );

    orders$ = collectionData(q).pipe(
      map((res: any) => {
        return res.filter((data: any) => data.drinksState != 'Finalizada');
      })
    );

    return orders$;
  }

  getWithDrinksAndFinished(): Observable<any[]> {
    let orders$: Observable<any[]>;

    const q = query(
      collection(this.firestore, 'orders'),
      where('orderedDrinks', '!=', [])
    );

    orders$ = collectionData(q).pipe(
      map((res: any) => {
        return res.filter((data: any) => data.drinksState == 'Finalizada');
      })
    );

    return orders$;
  }

  create(newOrder: Order) {
    return setDoc(
      doc(this.firestore, 'orders', newOrder.uID),
      JSON.parse(JSON.stringify(newOrder))
    );
  }

  async updatePaid() {
    const que = query(
      collection(this.firestore, 'orders'),
      where('paid', '==', false)
    );

    const querySnapshot = await getDocs(que);

    querySnapshot.forEach((document) => {
      updateDoc(doc(this.firestore, `orders/${document.id}`), { paid: true });
    });
  }

  async updateDishesState(order: Order, state: string) {
    updateDoc(doc(this.firestore, `orders/${order.uID}`), {
      dishesState: state,
    });
  }

  async updateDrinksState(order: Order, state: string) {
    updateDoc(doc(this.firestore, `orders/${order.uID}`), {
      drinksState: state,
    });
  }
}
