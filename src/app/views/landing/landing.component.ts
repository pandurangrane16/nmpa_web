import { Component, inject, OnInit } from "@angular/core";
import { FooterComponent } from "../../components/footers/footer/footer.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthNavbarComponent } from "../../components/navbars/auth-navbar/auth-navbar.component";
import { CardTableComponent } from "../../components/cards/card-table/card-table.component";
import { CmButton } from "../../components/cm-button/cm-button";
import { CmTextarea } from "../../components/cm-textarea/cm-textarea";
import { CmInput } from "../../components/cm-input/cm-input";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  imports: [FooterComponent, CommonModule, AuthNavbarComponent, CardTableComponent, CmButton, FormsModule, CmTextarea, CmInput],
  standalone: true
})
export class LandingComponent implements OnInit {
  fullName: string = "";
  description: string = "";
  constructor(private router: Router) { }
  companyStatus: 'APPROVED' | 'PENDING' | 'REJECTED' = 'APPROVED';
  statusDesc: string = " - Company Details Pending"
  ngOnInit(): void { }

  getInputData(evt: any) {
    this.fullName = evt;
  }
  getTextAreaData(evt: any) {
    this.description = evt;
  }


  OpenShortCut(type: any) {
    if (type === 'company') {
      this.router.navigate(['/profile']);
    }
    else if (type === 'pass') {
      //window.location.href = '/vehicle';
    }
    else if (type === 'rfid') {
      //window.location.href = '/view-rfid';
    }
    else if (type === 'reports') {
      //window.location.href = '/rfid-pass-details';
    }
  }
}
