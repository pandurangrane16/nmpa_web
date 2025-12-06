import { Component, OnInit } from "@angular/core";
import { PagesDropdownComponent } from "../../dropdowns/pages-dropdown/pages-dropdown.component";
import { CommonModule } from "@angular/common";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
  imports: [PagesDropdownComponent, CommonModule, RouterLink]
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;

  constructor(private router : Router) { }

  ngOnInit(): void { }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  ViewProfile() {
    this.router.navigate(['user']);
  }

}
