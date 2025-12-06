import { Component, OnInit } from '@angular/core';
import { AuthNavbarComponent } from "../../../components/navbars/auth-navbar/auth-navbar.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { FooterSmallComponent } from "../../../components/footers/footer-small/footer-small.component";

@Component({
  selector: 'app-user',
  imports: [AuthNavbarComponent, RouterModule,RouterOutlet, FooterSmallComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
constructor() {}

  ngOnInit(): void {}
}
