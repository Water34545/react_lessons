//HOC === Higher Order Component == Decorator
import React from "react";

export default OriginalComponent =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: null
    };

    toggleOpen = isOpen => () => {
      this.setState({ isOpen: !isOpen });
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
