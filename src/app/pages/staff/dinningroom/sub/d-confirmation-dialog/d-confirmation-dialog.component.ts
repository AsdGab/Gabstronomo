import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-d-confirmation-dialog',
  templateUrl: './d-confirmation-dialog.component.html',
  styleUrls: ['./d-confirmation-dialog.component.scss'],
})
export class DConfirmationDialogComponent {
  constructor(
    public dialog: MatDialogRef<DConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: any
  ) {}

  closeDialog(): void {
    this.dialog.close(false);
  }

  confirmed(): void {
    this.dialog.close(true);
  }
}
