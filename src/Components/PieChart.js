import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BasicPie from "./Pie";

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 484,
          height: 264,
          borderRadius: 5,
        },
      }}
    >
      <Paper elevation={3}>
        <BasicPie />
      </Paper>
    </Box>
  );
}
