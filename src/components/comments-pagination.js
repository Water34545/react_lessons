import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Comment from "./comment";
import { connect } from "react-redux";
import { loadComments } from "../ac";
import Loader from "./common/loader";

class CommentPagination extends Component {
  static propTypes = {
    page: PropTypes.number
  };

  componentDidUpdate(oldProps) {
    const { page, loadComments } = this.props;
    if (!oldProps.isOpen && !page.commentsLoading && !page.commentsLoaded) {
      loadComments(page);
    }
  }

  render() {
    const { page } = this.props;
    return (
      <div>
        <h2>Comments will be here page={page}</h2>
        {this.getBody()}
        {pagination(page)}
      </div>
    );
  }

  getBody() {
    const {
      page: { comments, commentsLoading, commentsLoaded }
    } = this.props;
    if (commentsLoading) return <Loader />;
    if (!commentsLoaded) return null;

    const body = comments.length ? (
      <ul className="test__comment-list--body">
        {comments.map(id => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test__comment-list--empty">No comments yet</h3>
    );

    return <div className="test__comment-list--body">{body}</div>;
  }
}

const pagination = page =>
  +page === 1 ? (
    <ul>
      <li key={+page + 1}>
        <NavLink to={`/comments/${+page + 1}`} activeStyle={{ color: "red" }}>
          Next
        </NavLink>
      </li>
    </ul>
  ) : (
    <ul>
      <li key={+page + 1}>
        <NavLink to={`/comments/${+page + 1}`} activeStyle={{ color: "red" }}>
          Next
        </NavLink>
      </li>
      <li key={+page - 1}>
        <NavLink to={`/comments/${+page - 1}`} activeStyle={{ color: "red" }}>
          Prev
        </NavLink>
      </li>
    </ul>
  );

export default connect(
  null,
  { loadComments }
)(CommentPagination);
