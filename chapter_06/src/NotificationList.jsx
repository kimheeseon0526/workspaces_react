import React from "react";
import Notification from "./Notification";
import {render} from "@testing-library/react";

const reserveNotifications = [
  {no:1, message: "미친듯이 졸리네"},
  {no:2,message: "점심시간에 한 숨 때리고"},
  {no:3,message: "저녁은 비오니까 삼쏘"}
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  //생명주기 함수 시작 컴포넌트
  componentDidMount() {
    const {notifications} = this.state;
    timer = setInterval(() => {
      if (notifications.length < reserveNotifications.length) {
        const index = notifications.length;
        notifications.push(reserveNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState( {notifications: []});  //지울 때 빈배열로 덮어씀
        clearInterval(timer);
      }
    }, 1000);
    console.log("componentDidMount() called......")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() called......")
  }

  //생명주기 삭제 컴포넌트
    componentWillUnmount() {
      if(timer) {
        clearInterval(timer);
      }
    console.log("componentWillUnmount() called......")
    }

    render() {
      return (
          <div>
            {this.state.notifications.map((notification) => {
              return <Notification
                  key={notification.no}
                  message= {notification.message} />;
            })}
          </div>
      );
    }
}

export default NotificationList
