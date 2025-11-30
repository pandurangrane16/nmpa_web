import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { CardStatsComponent } from "../../cards/card-stats/card-stats.component";
import { CmTickerContainer } from "../../cm-ticker-container/cm-ticker-container";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
  imports: [CommonModule, CardStatsComponent, CmTickerContainer]
})
export class HeaderStatsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
