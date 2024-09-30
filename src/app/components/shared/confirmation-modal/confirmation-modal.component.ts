import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

interface ModalData {
  title?: string;
  content?: string;
  actions?: {
    confirmText?: string;
    cancelText?: string;
    confirmAction?: () => void;
    cancelAction?: () => void;
  };
}
@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {
  data: ModalData;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: ModalData
  ) {
    this.data = modalData;
  }

  onConfirm() {
    if (this.data.actions?.confirmAction) {
      this.data.actions.confirmAction();
    }
    this.dialogRef.close(true);
  }

  onCancel() {
    if (this.data.actions?.cancelAction) {
      this.data.actions.cancelAction();
    }
    this.dialogRef.close(false);
  }
}
