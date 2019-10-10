import React from "react";
import { Route } from "react-router-dom";
import CommentsPagination from "../comments-pagination";

function CommentRoute() {
  return <Route path="/comments/:page" children={getCommentsPaginator} />;
}

function getCommentsPaginator({ match }) {
  return <CommentsPagination page={match.params.page} />;
}

CommentRoute.propTypes = {};

export default CommentRoute;
