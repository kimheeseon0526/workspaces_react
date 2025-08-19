import React from "react";

function Nav(props) {

  const topics = props.topics;
  //const {topics} = props;

  //1.for문
  const lis = [];
  for(let i = 0; i< topics.length; i++) {
    let topic = topics[i];
    lis.push(<li key={topic.id}><a id={topic.id} href="/" onClick={ (event) => {
    event.preventDefault();
    props.onChangeMode(Number(event.target.id));  //숫자로 변환
    }}>{topic.title}</a></li>);
  }

  //2.map : list 데이터를 하나씩 꺼내 쓰는 것
  // const listItems = topics.map((topic) =>
  //   <li key={topic.id}><a href="/">{topic.title}</a></li>
  // );

  return(
      <div>
      <ol>
        {/*{listItems}*/}
        {lis}
      </ol>
      </div>
  );
}

export default Nav;