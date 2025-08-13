import React, {useState, useEffect} from "react";

function UserStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return() => { //끝날 때 실행
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
    };
  });

    if(isOnline === null) {
      return '대기중!';
    }
    return isOnline ? '온라인' : '오프라인';
}

export default UserStatus;