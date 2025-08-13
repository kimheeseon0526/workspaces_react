import React from "react";

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  return (
      <div>
        <h1>안녕하쇼</h1>
        {unreadMessages.length > 0 &&
        <h2>
          현재 {unreadMessages.length}개의 메세지는 안읽음 아직까지
        </h2>
        }
      </div>
  );
}

export default Mailbox;