import { Component, OnInit } from "@angular/core";
import { FooterComponent } from "../../components/footers/footer/footer.component";
import { CommonModule } from "@angular/common";
import {FormsModule} from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AuthNavbarComponent } from "../../components/navbars/auth-navbar/auth-navbar.component";
import { CardTableComponent } from "../../components/cards/card-table/card-table.component";
import { CmButton } from "../../components/cm-button/cm-button";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  imports: [FooterComponent, CommonModule, AuthNavbarComponent, CardTableComponent, CmButton,FormsModule],
  standalone:true
})
export class LandingComponent implements OnInit {
  fullName : string ="";
  description:string = "";
  constructor() {}

  ngOnInit(): void {}
}
