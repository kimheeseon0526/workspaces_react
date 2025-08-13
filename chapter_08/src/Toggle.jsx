import React, {useState} from "react";

//이벤트 처리

function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(false);

  //방법1. 함수 안에 함수로 정의
  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  //방법2. arrow function 사용
  // const handleClick = () => {
  //   setIsToggleOn((isToggleOn) => !isToggleOn);
  // }

  return(
    <button onClick={handleClick}>
      {isToggleOn ?  '켜' : '꺼'}
    </button>
  );

}

export default Toggle;