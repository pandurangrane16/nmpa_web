import { Component, OnInit } from "@angular/core";
import { PagesDropdownComponent } from "../../dropdowns/pages-dropdown/pages-dropdown.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Router } from "express";

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
  imports:[PagesDropdownComponent,CommonModule,RouterLink]
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;
   
  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

}
