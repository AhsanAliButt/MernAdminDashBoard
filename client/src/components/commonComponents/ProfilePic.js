import React from "react";
import { Box } from "@mui/system";
import Profile from "../../assets/profile.jpg";
const ProfilePic = ({ src, height, width, borderRadius }) => {
  return (
    <Box
      component="img"
      alt="profile"
      src={src || Profile}
      height={height || "40px"}
      width={width || "40px"}
      borderRadius={borderRadius || "50%"}
      sx={{ objectFit: "cover" }}
    />
  );
};

export default ProfilePic;
