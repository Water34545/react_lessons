import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div>
        <h2>{comment.user}</h2>
        <section>{comment.text}</section>
      </div>
    );
  }
}

export default Comment;
