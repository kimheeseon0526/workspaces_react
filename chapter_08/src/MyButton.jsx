import React from "react";

function MyButton(props) {
  const handelDelete = (id, event) => {
    console.log(id, event.target);
  }

  return(
      <button onClick={(event) => handelDelete(1, event)}> 삭제하기 </button>
  );
}

export default MyButton;