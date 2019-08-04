import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./comment";
import toggleOpen from "../decorators/toggle-open";

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  /*
  static defaultProps = {
    comments: []
  }
*/

  render() {
    const { isOpen, toggleOpen } = this.props;
    const text = isOpen ? "hide comments" : "show comments";
    return (
      <div className="test--comments-list__container">
        <button className="test--comments__btn" onClick={toggleOpen}>
          {text}
        </button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    const { comments, isOpen } = this.props;
    if (!isOpen) return null;

    const body = comments.length ? (
      <ul className="test--comments__body" ref={this.setListRef}>
        {comments.map(comment => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    );

    return <div>{body}</div>;
  }

  setListRef = ref => {
    this.list = ref;
  };
}
/*

CommentList.propTypes = {
  comments: PropTypes.array
}
*/

export default toggleOpen(CommentList);
