import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  collection,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Ticket } from 'src/app/models/ticketModel';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private ticketsCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.ticketsCollection = collection(this.firestore, 'tickets');
  }

  create(newTicket: Ticket) {
    return setDoc(
      doc(this.firestore, 'tickets', newTicket.uID),
      JSON.parse(JSON.stringify(newTicket))
    );
  }
}
