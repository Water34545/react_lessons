import React, { Component } from "react";

class AccordionComponent extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = isOpen => () => {
    this.setState({ isOpen: !isOpen });
  };
}

export default AccordionComponent;
