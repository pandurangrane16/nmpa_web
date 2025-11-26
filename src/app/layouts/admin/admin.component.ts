import { Component, OnInit } from "@angular/core";
import { FooterAdminComponent } from "../../components/footers/footer-admin/footer-admin.component";
import { RouterOutlet } from "@angular/router";
import { HeaderStatsComponent } from "../../components/headers/header-stats/header-stats.component";
import { AdminNavbarComponent } from "../../components/navbars/admin-navbar/admin-navbar.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  imports:[FooterAdminComponent,RouterOutlet,HeaderStatsComponent,AdminNavbarComponent,SidebarComponent]
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
