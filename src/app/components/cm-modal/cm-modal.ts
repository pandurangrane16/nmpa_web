import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cm-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './cm-modal.html',
  styleUrl: './cm-modal.css',
})
export class CmModal {
  @Input() title: string = 'Confirm Action';
  @Input() message: string = 'Are you sure you want to proceed?';
  @Input() confirmButtonText: string = 'Confirm';
  @Input() cancelButtonText: string = 'Cancel';
  @Input() confirmButtonClass: string = 'bg-red-600 hover:bg-red-700';

  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmAction() {
    this.confirmed.emit();
    this.closeModal();
  }

  cancelAction() {
    this.cancelled.emit();
    this.closeModal();
  }
}