import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

import {
  Chart,
  ChartConfiguration,
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

Chart.register(
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

@Component({
  selector: "app-card-bar-chart",
  templateUrl: "./card-bar-chart.component.html",
})
export class CardBarChartComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit() {

    // ⛔ Prevent SSR from running Chart.js
    if (!isPlatformBrowser(this.platformId)) return;

    const config: ChartConfiguration<"bar"> = {
      type: "bar",
      data: {
        labels: ["January","February","March","April","May","June","July"],
        datasets: [
          {
            label: String(new Date().getFullYear()),
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: [30, 78, 56, 34, 100, 45, 13],
            borderWidth: 1,
            barThickness: 8,
          },
          {
            label: String(new Date().getFullYear() - 1),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [27, 68, 86, 74, 10, 4, 87],
            borderWidth: 1,
            barThickness: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: "rgba(0,0,0,.4)" },
          },
          title: { display: false },
          tooltip: { mode: "index", intersect: false },
        },
        scales: {
          x: {
            display: false,
            grid: {
              display: true,
              tickBorderDash: [2],
              tickBorderDashOffset: 2,
              color: "rgba(33, 37, 41, 0.3)",
            },
          },
          y: {
            display: true,
            grid: {
              tickBorderDash: [2],
              tickBorderDashOffset: 2,
              color: "rgba(33, 37, 41, 0.2)",
            },
            ticks: { color: "black" },
          },
        },
      },
    };

    const canvas = document.getElementById("bar-chart") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    new Chart(ctx!, config);
  }
}
