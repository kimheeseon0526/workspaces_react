import React from "react";

function NumberList(props) {
  const {numbers} = props;
  //const numbers = props.numbers; 와 같은 말

  //리스트를 표시할 때 반드시 키값이 있어야됨
  //키값은 중복될 수 없다
  const listItems = numbers.map((number) =>
    <li key={number}>{number}</li>
  );
  return(
      <ul>{listItems}</ul>
  );
}

export default NumberList;