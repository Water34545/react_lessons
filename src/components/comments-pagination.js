import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Comment from "./comment";
import Loader from "./common/loader";
import { checkAndLoadCommentsForPage } from "../ac";
import {
  commentsPageLoadingSelector,
  commentsPageIdsSelector,
  totalCommentsSelector
} from "../selectors/index";

class CommentPagination extends Component {
  componentDidMount() {
    this.props.checkAndLoadCommentsForPage(this.props.page);
  }

  componentDidUpdate() {
    const { page, checkAndLoadCommentsForPage } = this.props;
    checkAndLoadCommentsForPage(page);
  }

  render() {
    const { total } = this.props;
    if (!total) return <Loader />;
    return (
      <div>
        {this.getCommentsItems()}
        {this.getPaginator()}
      </div>
    );
  }

  getCommentsItems() {
    const { comments, laoding } = this.props;
    if (laoding || !comments) return <Loader />;
    const commentsItems = comments.map(id => (
      <li key={id}>
        <Comment id={id} />
      </li>
    ));
    return <ul>{commentsItems}</ul>;
  }

  getPaginator() {
    const { total } = this.props;
    const items = new Array(Math.floor(total - 1) / 5 + 1)
      .fill()
      .map((_, i) => (
        <li key={i}>
          <NavLink to={`/comments/${i + 1}`} activeStyle={{ color: "red" }}>
            {i + 1}
          </NavLink>
        </li>
      ));
    return <ul>{items}</ul>;
  }
}

export default connect(
  (state, props) => {
    return {
      total: totalCommentsSelector(state),
      laoding: commentsPageLoadingSelector(state, props),
      comments: commentsPageIdsSelector(state, props)
    };
  },
  { checkAndLoadCommentsForPage }
)(CommentPagination);
