import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { UserDropdownComponent } from "../dropdowns/user-dropdown/user-dropdown.component";
import { NotificationDropdownComponent } from "../dropdowns/notification-dropdown/notification-dropdown.component";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  imports:[RouterLink,CommonModule,RouterLinkActive,UserDropdownComponent,NotificationDropdownComponent]
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes:any) {
    this.collapseShow = classes;
  }
}
