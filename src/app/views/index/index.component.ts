import { Component, OnInit } from "@angular/core";
import { FooterComponent } from "../../components/footers/footer/footer.component";
import { RouterLink } from "@angular/router";
import { IndexNavbarComponent } from "../../components/navbars/index-navbar/index-navbar.component";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  imports : [FooterComponent,RouterLink,IndexNavbarComponent]
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
