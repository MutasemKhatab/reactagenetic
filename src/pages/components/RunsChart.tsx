import { Line, LineChart, XAxis, YAxis } from "recharts";
import { Card } from "../../components/ui/card";
import type { ChartConfig } from "../../components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";

const chartConfig = {
  totalRuns: {
    label: "Total Runs",
    color: "#6366f1",
  },
  successful: {
    label: "Successful",
    color: "#34d399",
  },
  failed: {
    label: "Failed",
    color: "#f87171",
  },
} satisfies ChartConfig;

const chartData = [
  { date: "Jul 1", totalRuns: 42, successful: 40, failed: 2 },
  { date: "Jul 2", totalRuns: 45, successful: 42, failed: 3 },
  { date: "Jul 3", totalRuns: 38, successful: 35, failed: 3 },
  { date: "Jul 4", totalRuns: 40, successful: 37, failed: 3 },
  { date: "Jul 5", totalRuns: 43, successful: 41, failed: 2 },
  { date: "Jul 6", totalRuns: 33, successful: 30, failed: 3 },
  { date: "Jul 7", totalRuns: 38, successful: 35, failed: 3 },
  { date: "Jul 8", totalRuns: 45, successful: 42, failed: 3 },
  { date: "Jul 9", totalRuns: 50, successful: 47, failed: 3 },
  { date: "Jul 10", totalRuns: 48, successful: 45, failed: 3 },
  { date: "Jul 11", totalRuns: 52, successful: 49, failed: 3 },
  { date: "Jul 12", totalRuns: 53, successful: 50, failed: 3 },
  { date: "Jul 13", totalRuns: 49, successful: 46, failed: 3 },
  { date: "Jul 14", totalRuns: 46, successful: 43, failed: 3 },
  { date: "Jul 15", totalRuns: 45, successful: 42, failed: 3 },
  { date: "Jul 16", totalRuns: 40, successful: 37, failed: 3 },
  { date: "Jul 17", totalRuns: 38, successful: 35, failed: 3 },
  { date: "Jul 18", totalRuns: 42, successful: 39, failed: 3 },
  { date: "Jul 19", totalRuns: 45, successful: 42, failed: 3 },
  { date: "Jul 20", totalRuns: 48, successful: 45, failed: 3 },
  { date: "Jul 21", totalRuns: 50, successful: 47, failed: 3 },
  { date: "Jul 22", totalRuns: 47, successful: 44, failed: 3 },
  { date: "Jul 23", totalRuns: 45, successful: 42, failed: 3 },
  { date: "Jul 24", totalRuns: 43, successful: 40, failed: 3 },
  { date: "Jul 25", totalRuns: 41, successful: 38, failed: 3 },
  { date: "Jul 26", totalRuns: 39, successful: 36, failed: 3 },
  { date: "Jul 27", totalRuns: 35, successful: 32, failed: 3 },
  { date: "Jul 28", totalRuns: 38, successful: 35, failed: 3 },
  { date: "Jul 29", totalRuns: 42, successful: 39, failed: 3 },
  { date: "Jul 30", totalRuns: 45, successful: 42, failed: 3 },
];

export default function RunsChart() {
  return (
    <Card className="my-5 w-full">
      <ChartContainer
        config={chartConfig}
        className="my-5 max-h-[400px] min-h-[100px] w-full"
      >
        <LineChart data={chartData}>
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            dataKey="totalRuns"
            type="monotone"
            stroke="var(--color-totalRuns)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="successful"
            type="monotone"
            stroke="var(--color-successful)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="failed"
            type="monotone"
            stroke="var(--color-failed)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </Card>
  );
}
