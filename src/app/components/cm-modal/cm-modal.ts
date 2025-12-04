import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cm-modal',
  imports: [CommonModule,FormsModule],
  templateUrl: './cm-modal.html',
  styleUrl: './cm-modal.css',
})
export class CmModal {
showModal = false;

openModal() {
  this.showModal = true;
}

closeModal() {
  this.showModal = false;
}

confirmAction() {
  // Your logic here
  console.log("Confirmed!");
  this.closeModal();
}
}