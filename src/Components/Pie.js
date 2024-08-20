import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 62, label: "Attendees" },
            { id: 1, value: 13, label: "Non-Attendees" },
            { id: 2, value: 23, label: "Tentative" },
          ],
          innerRadius: 50,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -180,
          endAngle: 180,
          cx: 130,
          cy: 130,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      width={450}
      height={300}
    />
  );
}
