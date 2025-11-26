import { Component, OnInit, AfterViewInit } from "@angular/core";
import {
  Chart,
  ChartConfiguration,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

@Component({
  selector: "app-card-line-chart",
  templateUrl: "./card-line-chart.component.html",
})
export class CardLineChartComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const config: ChartConfiguration<"line"> = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: String(new Date().getFullYear()),
            borderColor: "#4c51bf",
            backgroundColor: "#4c51bf",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: String(new Date().getFullYear() - 1),
            borderColor: "#fff",
            backgroundColor: "#fff",
            data: [40, 68, 86, 74, 56, 60, 87],
            fill: false,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
            position: "bottom",
          },
          title: {
            display: false,
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },

        scales: {
          x: {
            ticks: { color: "rgba(255,255,255,.7)" },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: { color: "rgba(255,255,255,.7)" },
            grid: {
              color: "rgba(255, 255, 255, 0.15)",
            },
          },
        },
      },
    };

    const canvas = document.getElementById(
      "line-chart"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    new Chart(ctx!, config);
  }
}
