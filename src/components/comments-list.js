import React from "react";
import Comment from "./comment";

export default function CommentsList({ comments }) {
  const commentItems = comments.map(comment => (
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>
  ));

  return <ul>{commentItems}</ul>;
}
