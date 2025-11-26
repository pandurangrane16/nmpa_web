import { Component, OnInit } from "@angular/core";
import { FooterComponent } from "../../components/footers/footer/footer.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { AuthNavbarComponent } from "../../components/navbars/auth-navbar/auth-navbar.component";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  imports:[FooterComponent,CommonModule,RouterLink,AuthNavbarComponent],
  standalone:true
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
