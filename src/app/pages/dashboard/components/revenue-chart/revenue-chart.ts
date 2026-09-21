import { Component, computed, signal } from "@angular/core";
import { BaseChartDirective } from "ng2-charts";
import { ChartConfiguration, Plugin } from "chart.js";
import { Panel } from "../../../../common-ui/panel/panel";

type Metric = "revenue" | "orders";
type Granularity = "hourly" | "daily";

const LINE_COLOR = "#6b1a24";

/**
 * Плагин Chart.js: рисует пунктирную вертикальную линию
 * от точки под курсором до оси X (в Chart.js такого нет из коробки).
 */
const hoverLine: Plugin<"line"> = {
  id: "hoverLine",
  afterDatasetsDraw(chart) {
    const active = chart.tooltip?.getActiveElements();
    if (!active?.length) return;

    const { x, y } = active[0].element;
    const ctx = chart.ctx;
    ctx.save();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = LINE_COLOR;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, chart.chartArea.bottom);
    ctx.stroke();
    ctx.restore();
  },
};

@Component({
  selector: "app-revenue-chart",
  imports: [BaseChartDirective, Panel],
  templateUrl: "./revenue-chart.html",
  styleUrl: "./revenue-chart.scss",
})
export class RevenueChart {
  // Что показываем и с каким шагом — сигналы, график пересчитывается сам
  readonly metric = signal<Metric>("revenue");
  readonly granularity = signal<Granularity>("hourly");

  // Демо-данные. Потом придут из сервиса/API.
  private readonly source: Record<Granularity, { labels: string[]; revenue: number[]; orders: number[] }> = {
    hourly: {
      labels: ["11:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
      revenue: [5000, 40000, 30000, 50000, 10000, 0],
      orders: [4, 32, 25, 41, 9, 1],
    },
    daily: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      revenue: [18000, 22000, 19500, 26000, 38000, 45000, 30567],
      orders: [98, 110, 104, 121, 162, 188, 137],
    },
  };

  // computed: пересобирает данные графика, когда меняется metric или granularity
  readonly data = computed<ChartConfiguration<"line">["data"]>(() => {
    const set = this.source[this.granularity()];
    return {
      labels: set.labels,
      datasets: [
        {
          data: set[this.metric()],
          borderColor: LINE_COLOR,
          borderWidth: 3,
          tension: 0.45,              // плавная кривая вместо ломаной
          pointRadius: 4,
          pointBackgroundColor: LINE_COLOR,
          pointHoverRadius: 6,
          pointHoverBorderWidth: 2,
          pointHoverBorderColor: "#ffffff",
        },
      ],
    };
  });

  readonly plugins = [hoverLine];

  readonly options: ChartConfiguration<"line">["options"] = {
    responsive: true,
    maintainAspectRatio: false,       // высоту задаёт контейнер в SCSS
    interaction: { mode: "index", intersect: false }, // подсказка без точного попадания в точку
    layout: { padding: { top: 8, right: 8 } },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: LINE_COLOR,
        displayColors: false,
        yAlign: "bottom",
        caretSize: 6,
        cornerRadius: 6,
        padding: { x: 8, y: 6 },
        titleFont: { family: "Arimo", size: 10, weight: "normal" },
        titleMarginBottom: 2,
        bodyFont: { family: "Arimo", size: 12, weight: "bold" },
        callbacks: {
          label: (ctx) =>
            this.metric() === "revenue" ? `${ctx.parsed.y} €` : `${ctx.parsed.y} orders`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: "#1a1a1a", font: { family: "Arimo", size: 12 } },
      },
      y: {
        beginAtZero: true,
        border: { display: false },
        grid: { color: "#ebe3df" },
        ticks: {
          color: "#1a1a1a",
          font: { family: "Arimo", size: 12 },
          maxTicksLimit: 6,
          // 50000 -> "50тыс." как в макете
          callback: (value) => {
            const v = Number(value);
            return this.metric() === "revenue" && v !== 0 ? `${v / 1000}тыс.` : v;
          },
        },
      },
    },
  };

  setGranularity(event: Event): void {
    this.granularity.set((event.target as HTMLSelectElement).value as Granularity);
  }
}
