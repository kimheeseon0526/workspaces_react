import React, {useState} from "react";
import Dialog from "./Dialog";

function SignUpDialog(props) {
  const [nickname, setNickname]= useState('');

  const handleChange = (event) => {
    setNickname(event.target.value);
  }

  const handleSignUp = (event) => {
    alert(`어서오슈 ${nickname}`);
  }

  return(
      <Dialog
        title="화성 탐사 프로구램"
        message="닉네임 입력 ㄱㄱ" >
        <input
          value={nickname}
          onChange={handleChange} />
        <button onClick={handleSignUp}>
          가입하기
        </button>
      </Dialog>
  )
}

export default SignUpDialog;