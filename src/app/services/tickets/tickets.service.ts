import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Ticket } from 'src/app/models/ticketModel';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  constructor(private firestore: Firestore) {}

  create(newTicket: Ticket) {
    return setDoc(
      doc(this.firestore, 'tickets', newTicket.uID),
      JSON.parse(JSON.stringify(newTicket))
    );
  }
}
