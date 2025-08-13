import React, {useState} from "react";

function Toggle2(props) {
  const[isConfirm, setConfirm] = useState(false);

  function handleClick() {
    const check= window.confirm("확인할겨?");
    setConfirm( check);
  }

  return(
      <button onClick={handleClick} disabled={isConfirm} >
        {isConfirm ? '확인됨' : '확인하기' }
      </button>

  );
}

export default Toggle2;
