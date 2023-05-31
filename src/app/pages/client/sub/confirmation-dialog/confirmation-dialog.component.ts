import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  constructor(
    public dialog: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: any
  ) {}

  pendingAnswer: boolean = true;

  closeDialog(): void {
    this.dialog.close(false);
  }

  confirmed(): void {
    this.pendingAnswer = false;
    setTimeout(() => this.dialog.close(true), 3000);
  }
}
