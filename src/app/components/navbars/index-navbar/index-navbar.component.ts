import { Component, OnInit } from "@angular/core";
import { IndexDropdownComponent } from "../../dropdowns/index-dropdown/index-dropdown.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-index-navbar",
  templateUrl: "./index-navbar.component.html",
  imports : [IndexDropdownComponent,CommonModule,RouterLink]
})
export class IndexNavbarComponent implements OnInit {
  navbarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
