import React from "react";
import Comment from "./comment";

export default function CommentsList({ comments }) {
  const commentItems =
    typeof comments != "undefined"
      ? comments.map(comment => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))
      : "";

  return (
    <div>
      <h3>
        Comments <button onClick>open</button>
      </h3>
      <ul>{commentItems}</ul>
    </div>
  );
}
