import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../../../components/footers/footer/footer.component";
import { CmButton } from "../../../components/cm-button/cm-button";
import { CmInput } from '../../../components/cm-input/cm-input';
import { CmTextarea } from "../../../components/cm-textarea/cm-textarea";

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, FormsModule, FooterComponent, CmButton, CmInput, CmTextarea],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  isEditMode: boolean = false;

  inputEmail: string = "27AAFCN1234Q1Z5";
  inputFullName: string = "452132";
  inputContact: string = "452132";
  inputAddress: string = "Plot No. 98, CMS Computers India Pvt Ltd,\nMillennium Business Park, Sector-3, Airoli, Navi Mumbai,\nMaharashtra - 400708";
  user = {
    name: 'Vishnu',
    email: 'vishnu@example.com',
    phone: '+91 9876543210',
    address: 'Pune, Maharashtra',
    avatar: 'https://i.pravatar.cc/150?img=12',
  };
  previewUrl: string = "https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg";

  EditDetails(event: any) {
    this.isEditMode = true;
  }
  EditUserDetails(event: any) {
  }

  preview(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => this.previewUrl = reader.result as string;
    reader.readAsDataURL(file);
  }
}
}
