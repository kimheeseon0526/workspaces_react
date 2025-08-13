import React from "react";
import Button from "./Button";

function ConfirmDialog(props) {
  return (
    <div>
      <p>내용 확인 했으면 확인 버튼 눌러</p>
      <Button color='green'> 확인< /Button>
    </div>
  );
}

export default ConfirmDialog;