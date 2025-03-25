import React from "react";
import { Button, Typography } from "@mui/material";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      hour12: false,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    // have time set to HH:MM:SS format, no AM/PM
    this.setState({
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: this.state.hour12,
      }),
    });
    // set time to 24 hour format

    // this.setState({
    //   time: new Date().toLocaleTimeString(),
    // });
  }

  changeTimeFormat = () => {
    this.setState({
      hour12: !this.state.hour12,
    });
  };

  render() {
    return (
      <div>
        <Typography
          variant="h4"
          style={{ color: "white", padding: "16px", marginLeft: "8px" }}
          onClick={this.changeTimeFormat}
        >
          {this.state.time}
        </Typography>
        {/* <Button
          variant="contained"
          color="primary"
          onClick={() => alert("Hello")}
        >
          Click Me
        </Button> */}
      </div>
    );
  }
}
export default Time;
