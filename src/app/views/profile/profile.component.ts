import { Component, inject, OnInit } from "@angular/core";
import { FooterComponent } from "../../components/footers/footer/footer.component";
import { AuthNavbarComponent } from "../../components/navbars/auth-navbar/auth-navbar.component";
import { CmButton } from "../../components/cm-button/cm-button";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  imports: [FooterComponent, AuthNavbarComponent, CmButton],
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  constructor() {}
  router = inject(Router);

  ngOnInit(): void {}

  EditDetails(evt: any) {
    console.log("Edited Address: ", evt);
    this.router.navigate(['edit-profile']);
  }

}
