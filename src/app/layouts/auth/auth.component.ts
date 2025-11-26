import { Component, OnInit } from "@angular/core";
import { FooterComponent } from "../../components/footers/footer/footer.component";
import { AuthNavbarComponent } from "../../components/navbars/auth-navbar/auth-navbar.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { FooterSmallComponent } from "../../components/footers/footer-small/footer-small.component";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  imports:[AuthNavbarComponent,CommonModule,RouterOutlet,FooterSmallComponent]
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
