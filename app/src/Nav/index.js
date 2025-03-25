import React from "react";

import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BellIcon from "@mui/icons-material/Notifications";
import Icon from "@mui/material/Icon";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: "ArrowUpward",
    };
  }

  click = () => {
    this.setState({
      nav: "ArrowBackward",
    });
  };

  render() {
    return (
      <>
        <Icon
          onClick={this.click}
          sx={{ color: "white", margin: "8px" }}
          fontSize="large"
        >
          {this.state.nav}
        </Icon>
      </>
    );
  }
}

export default Nav;
