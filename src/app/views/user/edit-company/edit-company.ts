import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CmButton } from '../../../components/cm-button/cm-button';
import { AuthNavbarComponent } from '../../../components/navbars/auth-navbar/auth-navbar.component';
import { CmTextarea } from '../../../components/cm-textarea/cm-textarea';
import { CmInput } from "../../../components/cm-input/cm-input";
import { CmToggle } from "../../../components/cm-toggle/cm-toggle";
import { CmAutoselect } from "../../../components/cm-autoselect/cm-autoselect";
import { CmDatetime } from "../../../components/cm-datetime/cm-datetime";
import { FooterComponent } from '../../../components/footers/footer/footer.component';

@Component({
  selector: 'app-edit-company',
  imports: [FormsModule, CommonModule, AuthNavbarComponent, CmTextarea, CmInput, CmToggle, CmAutoselect, CmDatetime, FooterComponent, CmButton],
  templateUrl: './edit-company.html',
  styleUrl: './edit-company.css',
})
export class EditCompany {
  isEdit = false;
  inputRecComp: string = "NMPA";
  inputGstinNumber: string = "27AAFCN1234Q1Z5";
  inputPCSID: string = "452132";
  inputPANNumber: string = "AZGPP4218G";
  inputText: string = "Plot No. 98, CMS Computers India Pvt Ltd,\nMillennium Business Park, Sector-3, Airoli, Navi Mumbai,\nMaharashtra - 400708";
  user = {
    name: 'John Doe',
    address: '123 Street, Mumbai',
    contact: '9876543210',
    email: 'john@example.com'
  };

  edit() {
    this.isEdit = true;
  }

  cancel() {
    this.isEdit = false;
  }

  getTextAreaData(evt: any) {

  }
  GSTChange(evt: any) {

  }

  onStateSelect(state: string) {
    console.log("Selected state is:", state);
  }

  SaveCompanyDetails(evt: any) {
    console.log("Save Company Details: ", evt);
  }
}
