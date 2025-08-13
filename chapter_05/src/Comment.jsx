import React from "react";
import Avatar from "./Avatar";
import CommentText from "./CommentText";

function formatDate(date) {
}

//컴포넌트 추출(쪼개기)
//comment, user-info, avatar 3개로 추출
function Comment(props) {
  return(
      <div className="comment">
        <div className="user-info">
          {/*<img className="avatar"*/}
          {/*  src={props.author.avatarUrl}*/}
          {/*  alt={props.author.name}*/}
          {/*/>*/}
          {/*Avatar.jsx로 추출 후에는 아래처럼 변경 필요*/}
          <Avatar author={props.author} />


          <div className="user-info-name">
            {props.author.name}
          </div>
        </div>

        {/*<div className="comment-text">*/}
        {/*  {props.text}*/}
        {/*</div>*/}
        {/*<div className="commnet-date">*/}
        {/*  {formatDate(props.date)}*/}
        {/*</div>*/}

        <CommentText text={props.text} date={props.date} />


      </div>
  );
}

export default Comment;