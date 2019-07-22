import React from "react";
import Comment from "./comment";
import useAccordionItem from "../custom-hooks/accordionItem";

export default function ArticleList({ comments }) {
  const { isOpen, toggleOpen } = useAccordionItem();
  const commentItems =
    comments != "undefined"
      ? comments.map(comment => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))
      : "";

  return (
    <div>
      <h3>
        Comments
        <button onClick={toggleOpen(isOpen)}>
          {isOpen ? "close" : "open"}
        </button>
      </h3>
      <ul>{isOpen ? commentItems : ""}</ul>
    </div>
  );
}

//Decorator
/*function CommentsList({ comments, isOpen, toggleOpen }) {
  const commentItems = comments != "undefined" ? comments.map((comment) => (
    <li key={comment.id}>
        <Comment comment={comment} />
    </li>
  ))
  :
  ''

  return <div>
          <h3>
            Comments
            <button onClick={toggleOpen(isOpen)}>
              {isOpen ? "close" : "open"}
            </button>
          </h3>
          <ul>{isOpen ? commentItems : ""}</ul>
        </div>
}
export default accordionItem(CommentsList)*/

//extend class
/*class CommentsList extends AccodrionItem {

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

export default CommentsList;*/
