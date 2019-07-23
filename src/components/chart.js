import React, { Component } from "react";

class Chart extends Component {
  static propTypes = {};

  componentDidUpdate() {
    //compare props and update chart in this.container
  }

  render() {
    return <div ref={this.setContainerRef} />;
  }

  setContainerRef = ref => {
    this.container = ref;

    if (ref) {
      //do charting with d3
    } else {
      //cleanup
    }
  };
}

export default Chart;
