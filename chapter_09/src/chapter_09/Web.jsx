//web.jsx

import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";

//함수형 컴포넌트
//컴포넌트의 이름의 첫글자는 대문자
function Web(props) {
  return(
      //최상단 앨리먼트는 오로지 하나

      //Header, Nav, Article로 나누기
      <div>
        <Header />
        <Nav />
        <Article />
      </div>
  );
}
//다른 컴포넌트에서 사용할 수 있도록 하기 위한 선언
export default Web;