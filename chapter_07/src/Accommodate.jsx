import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;  //최대 수용 인원

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  //10명 다 입장시 -> isFull : true
  const [count, increaseCount,decreaseCount] = useCounter(0);
  //변수(count)와 함수 2개(증감) 사용

  useEffect(() => {
    console.log("=============");
    console.log("userEffect() is called~.~");
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value : ${count}`);
  }, [count]);

  return(
    <div style={ {padding: 16} }>
      <p>{`총 ${count}명 수용 해쑴`}</p>

      <button onClick={increaseCount} disabled={isFull}>입장 ㄱㄱ</button>
      <button onClick={decreaseCount}>퇴장 ㄱㄱ</button>

      {isFull && <p style={ {color: "red"}}> 정원 다 참 조땜!!</p> }
    </div>
  );
}

export default Accommodate;