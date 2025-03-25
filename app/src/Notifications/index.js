import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BellIcon from "@mui/icons-material/Notifications";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { CrisisAlert, Settings } from "@mui/icons-material";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }
  //   componentDidMount() {
  //     this.fetchNotifications();
  //   }

  render() {
    return (
      <>
        {/* <Box> */}
        <NotificationsIcon sx={{ color: "white", margin: "8px" }} />
        {/* </Box>
        <Box> */}
        <CrisisAlert sx={{ color: "white", margin: "8px" }} />
        {/* </Box>
        <Box> */}
        <Settings sx={{ color: "white", margin: "8px" }} />
        {/* </Box> */}
      </>
    );
  }
}

export default Notifications;
