import React  from "react";

function Book(props) {
  return (
      <div>
        <h2> {`이 책의 이름은 ${props.name} 임`}</h2>
        <h2> {`이 책은 총 ${props.numOfPage} 페이지임`}</h2>
      </div>
  );
}

export default Book;