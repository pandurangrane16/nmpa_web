import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  user = {
    name: 'Vishnu',
    email: 'vishnu@example.com',
    phone: '+91 9876543210',
    address: 'Pune, Maharashtra',
    avatar: 'https://i.pravatar.cc/150?img=12',
  };
}
