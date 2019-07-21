import React, { Component } from "react";
import Comment from "./comment";
import AccodrionComponent from "./accordion-component";

class CommentsList extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = isOpen => () => {
    this.setState({ isOpen: !isOpen });
  };

  render() {
    return (
      <div>
        <h3>
          Comments
          <button onClick={this.toggleOpen(this.state.isOpen)}>
            {this.state.isOpen ? "close" : "open"}
          </button>
        </h3>
        <ul>{this.state.isOpen ? this.getComments() : ""}</ul>
      </div>
    );
  }

  getComments() {
    return typeof this.props.comments != "undefined"
      ? this.props.comments.map(comment => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))
      : "";
  }
}

export default CommentsList;
