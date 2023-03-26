import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "components/commonComponents/Header";
import OverviewChart from "components/OverviewChart";
import { OverviewChart1 } from "components/OverviewChart1";

const OverView = () => {
  const [view, setView] = useState("units");
  return (
    <Box height={"75vh"}>
      <Header title="OVERVIEW" subtitle="Overview of general revenue" />
      <Box height="75vh">
        <FormControl
          sx={{
            mt: "1rem",
          }}
        >
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="view"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <Box height="75vh">
          <OverviewChart view={view} LineData={data} />
          {/* <OverviewChart1 view={view} data={data} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default OverView;

const data = [
  {
    id: "japan",
    color: "hsl(109, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 33,
      },
      {
        x: "helicopter",
        y: 59,
      },
      {
        x: "boat",
        y: 72,
      },
      {
        x: "train",
        y: 171,
      },
      {
        x: "subway",
        y: 49,
      },
      {
        x: "bus",
        y: 40,
      },
      {
        x: "car",
        y: 84,
      },
      {
        x: "moto",
        y: 78,
      },
      {
        x: "bicycle",
        y: 169,
      },
      {
        x: "horse",
        y: 96,
      },
      {
        x: "skateboard",
        y: 253,
      },
      {
        x: "others",
        y: 295,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(60, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 255,
      },
      {
        x: "helicopter",
        y: 286,
      },
      {
        x: "boat",
        y: 112,
      },
      {
        x: "train",
        y: 238,
      },
      {
        x: "subway",
        y: 285,
      },
      {
        x: "bus",
        y: 257,
      },
      {
        x: "car",
        y: 80,
      },
      {
        x: "moto",
        y: 201,
      },
      {
        x: "bicycle",
        y: 116,
      },
      {
        x: "horse",
        y: 171,
      },
      {
        x: "skateboard",
        y: 274,
      },
      {
        x: "others",
        y: 231,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(248, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 156,
      },
      {
        x: "helicopter",
        y: 163,
      },
      {
        x: "boat",
        y: 262,
      },
      {
        x: "train",
        y: 50,
      },
      {
        x: "subway",
        y: 59,
      },
      {
        x: "bus",
        y: 243,
      },
      {
        x: "car",
        y: 57,
      },
      {
        x: "moto",
        y: 166,
      },
      {
        x: "bicycle",
        y: 110,
      },
      {
        x: "horse",
        y: 120,
      },
      {
        x: "skateboard",
        y: 42,
      },
      {
        x: "others",
        y: 109,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(184, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 286,
      },
      {
        x: "helicopter",
        y: 242,
      },
      {
        x: "boat",
        y: 180,
      },
      {
        x: "train",
        y: 23,
      },
      {
        x: "subway",
        y: 143,
      },
      {
        x: "bus",
        y: 196,
      },
      {
        x: "car",
        y: 22,
      },
      {
        x: "moto",
        y: 214,
      },
      {
        x: "bicycle",
        y: 121,
      },
      {
        x: "horse",
        y: 266,
      },
      {
        x: "skateboard",
        y: 170,
      },
      {
        x: "others",
        y: 191,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(197, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 229,
      },
      {
        x: "helicopter",
        y: 262,
      },
      {
        x: "boat",
        y: 51,
      },
      {
        x: "train",
        y: 254,
      },
      {
        x: "subway",
        y: 233,
      },
      {
        x: "bus",
        y: 196,
      },
      {
        x: "car",
        y: 157,
      },
      {
        x: "moto",
        y: 279,
      },
      {
        x: "bicycle",
        y: 85,
      },
      {
        x: "horse",
        y: 181,
      },
      {
        x: "skateboard",
        y: 49,
      },
      {
        x: "others",
        y: 156,
      },
    ],
  },
];
