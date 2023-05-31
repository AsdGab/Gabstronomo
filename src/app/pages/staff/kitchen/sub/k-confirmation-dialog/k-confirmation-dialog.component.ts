import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-k-confirmation-dialog',
  templateUrl: './k-confirmation-dialog.component.html',
  styleUrls: ['./k-confirmation-dialog.component.scss'],
})
export class KConfirmationDialogComponent {
  constructor(
    public dialog: MatDialogRef<KConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: any
  ) {}

  closeDialog(): void {
    this.dialog.close(false);
  }

  confirmed(): void {
    this.dialog.close(true);
  }
}
