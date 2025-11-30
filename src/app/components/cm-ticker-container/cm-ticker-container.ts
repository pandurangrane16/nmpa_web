import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cm-ticker-container',
  imports: [CommonModule,FormsModule],
  templateUrl: './cm-ticker-container.html',
  styleUrl: './cm-ticker-container.css',
})
export class CmTickerContainer implements OnInit {

  messages = [
    "Vehicle MH01DG9543 has entered in Main Gate Light Motor Vehicle",
    "User Shridhar Ingale exited from SJ Gate",
    "Vehicle MH03DG9113 has entered in Main Gate Light Motor Vehicle",
    "User Pandurang Rane exited from Main Gate",
    "Vehicle MH04DG2233 has entered in Main Gate Light Motor Vehicle"
  ];

  visibleMessages: string[] = [];
  index = 0;

  ngOnInit() {
    // Push initial message
    this.visibleMessages.push(this.messages[0]);

    // Add new messages continuously
    setInterval(() => {
      this.index = (this.index + 1) % this.messages.length;
      this.visibleMessages.push(this.messages[this.index]);
      // Keep list short (avoid too long DOM)
      if (this.visibleMessages.length > 5) {
        this.visibleMessages = [];
        this.visibleMessages.push(this.messages[this.index]);
        this.visibleMessages.shift();
        this.index =-1;
      }

    }, 5000); // Change text every 3 seconds
  }
}