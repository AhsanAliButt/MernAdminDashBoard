import React from "react";
import { Typography } from "@mui/material";

const Text = ({ text, fontSize, color, fontWeight, sx }) => {
  return (
    <Typography
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      sx={sx}
    >
      {text}
    </Typography>
  );
};

export default Text;
