import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  orderBy,
  query,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Table } from 'src/app/models/tableModel';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  constructor(private firestore: Firestore) {}

  getAll(): Observable<Table[]> {
    const q = query(collection(this.firestore, 'tables'), orderBy('number'));

    return collectionData(q) as Observable<Table[]>;
  }
}
