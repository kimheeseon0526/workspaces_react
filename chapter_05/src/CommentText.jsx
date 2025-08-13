import React from "react";
function formatDate(date) {}

function CommentText(props) {
  return (
      <div>
        <div className="comment-text">
          {props.text}
        </div>

        <div className="commnet-date">
          {formatDate(props.date)}
        </div>
      </div>
  );
}

export default CommentText;