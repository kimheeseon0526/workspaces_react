import React from "react";
import Comment from "./Comment";

const comments=[
  {
    name:"차은우",
    comment:"개잘생김"
  },
  {
    name:"송강",
    comment: "도 잘생김"
  },
  {
    name:"백호",
    comment:"는 떠오르는 최애?"
  }
]
function CommentList(props) {
  return(
      <div>
        {comments.map((comment) => {
          return(
              <Comment name={comment.name} comment={comment.comment} />
          );
        })}
      </div>
  );
}

export default CommentList;