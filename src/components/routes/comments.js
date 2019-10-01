import React from "react";
import { Route } from "react-router-dom";
import CommentsPagination from "../comments-pagination";

function CommentRoute() {
  return (
    <div>
      <Route path="/comments/:page" children={getComments} />
    </div>
  );
}

const getComments = ({ match }) =>
  match ? (
    <CommentsPagination page={match.params.page} />
  ) : (
    <CommentsPagination page={1} />
  );

CommentRoute.propTypes = {};

export default CommentRoute;
