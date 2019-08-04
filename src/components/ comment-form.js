import React, { Component } from "react";

class CommentForm extends Component {
  state = {
    username: "",
    text: ""
  };

  render() {
    return (
      <div>
        Add your comment
        <input
          name="username"
          value={this.state.username}
          onChange={this.addData}
        />
        <textarea name="text" value={this.state.text} onChange={this.addData} />
        <button onClick={this.addComment}>add comment</button>
      </div>
    );
  }

  addData = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  addComment = ev => {
    console.log(
      "user: " + this.state.username + " comment: " + this.state.text
    );
  };
}

export default CommentForm;
