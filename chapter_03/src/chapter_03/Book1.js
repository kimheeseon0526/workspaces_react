import React from "react";

//순수 react 문법
function Book1(props) {
  return (
      React.createElement("div", null, [
          React.createElement('h2', null, `이 책의 이름은 ${props.name} 임`),
          React.createElement('h2', null, `이 책은 총 ${props.numOfPage} 임`)
      ])
  );
}

export default Book1;