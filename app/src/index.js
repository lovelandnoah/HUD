import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import Time from "./Time";
import Notifications from "./Notifications";
import Nav from "./Nav";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import backgroundImage from "../utils/chief.jpg"; // Import the image

class App extends React.Component {
  render() {
    return (
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          // backgroundImage: `url(https://staticdelivery.nexusmods.com/mods/2971/images/758/758-1622778033-310560016.jpeg)`,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "97vh",
        }}
      >
        <Grid
          container
          spacing={2}
          // justifyContent="center"
          // alignItems="center"
          // style={{ height: "100%" }}
        >
          <Grid item size={8} style={{ padding: "32px" }}>
            {/* <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: 2,
                borderRadius: 2,
              }}
            > */}
            {/* <Time /> */}
            {/* </Box> */}
          </Grid>
          <Grid item size={4} style={{ padding: "32px" }}></Grid>
          <Grid item size={2}>
            {/* <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: 2,
                borderRadius: 2,
              }}
            > */}
            <Time />
            {/* </Box> */}
          </Grid>
          <Grid item size={8}></Grid>
          <Grid item size={2}>
            <Notifications />
          </Grid>
          {/* <Grid item size={2} style={{ margin: "250px" }}>
            <Nav />
          </Grid> */}
        </Grid>
        {/* <Time /> */}
      </Box>
    );
  }
}

export default App;

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);
