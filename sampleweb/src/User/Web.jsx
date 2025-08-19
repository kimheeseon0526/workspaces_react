//web.jsx

import React, {useState} from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Create from "./Create";
import Update from "./Update";

//함수형 컴포넌트
//컴포넌트의 이름의 첫글자는 대문자

const topics = [
  {
    id: 1,
    title : "html",
    content : "html............"

  },
  {
    id: 2,
    title : "css",
    content : "css............"
  },
  {
    id: 3,
    title : "javascript",
    content : "javascript............"
  }
];

function Web(props) {
  const [mode, setMode] = useState('Welcome')
  //글을 읽거나 수정할 때 사용하는 id
  const [id, setId] = useState(0);
  //글 등록시 사용할 id 값
  const [nextid, setNextId] = useState(4);  //3번까지 있으니까

  const [topics, setTopics] = useState([
    {id: 1, title : "html", content : "html............"},
    {id: 2, title : "css", content : "css............"},
    {id: 3, title : "javascript", content : "javascript............"}
  ]
  );

  let content = null; //Article 컴포넌트 내용 저장 변수

  if(mode === 'Welcome') {
    content = <Article title="Welcome" content="Hello web!" />;
  }
    //클릭한 내용 출력
  else if(mode === 'Read') {
    for(let i = 0; i < topics.length; i++) {
      if(topics[i].id === id) {
        content = <Article title={topics[i].title} content={topics[i].content} />;
      }
    }
  }
  else if(mode === 'Create') {
    content = <Create onCreate = {(_title, _content) => {
      //json 형태로
      const newTopic = {id:nextid, title: _title, content: _content}; // {key값 : 전달받은 값}
      const newTopics = [...topics];
      newTopics.push(newTopic); //새로 받은 newTopic을 기존의 topics 리스트에 추가(push)
      setTopics((newTopics)); //저장
      setNextId(nextid + 1);
      setId(newTopic.id);
      setMode('Read');
    }}/>;
  }
  else if(mode === 'Update') {
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].id === id) {
          content = <Update {...topics[i]} onUpdate={(_title, _content) => {
            const updateTopic = {id: id, title: _title, content: _content};
            const updateTopics = [...topics];
            for (let i = 0; i < updateTopics.length; i++) {
              if (updateTopics[i].id === id) {
                updateTopics[i] = updateTopic;
                break;
              }
            }
            setTopics(updateTopics);
            setMode('Read');
          }}/>;
        }
      }
  }

  return(
      //최상단 앨리먼트는 오로지 하나

      //Header, Nav, Article로 나누기
      <div>
        <Header title="WEB" onChangeMode={ () => {
          setMode('Welcome');
        }}/>
        <Nav topics={topics} onChangeMode={ (_id) => {
          setMode('Read');
          setId(_id);
        }} />
        {content}
        <ul>
        <li><a href="/" onClick={(event) => {
          event.preventDefault();
          setMode('Create')
        }}>Create</a></li>
          {mode === 'Read' && <li><a href="/" onClick={(event) => {
            event.preventDefault();
            setMode('Update');
          }}>Update</a></li>}
          {mode === 'Read'&& <li><a href="/" onClick={(event) => {
            event.preventDefault();
            const newTopics = [];
            for(let i = 0; i < topics.length; i++) {
              if(topics[i].id !== id) {
                newTopics.push(topics[i]);
              }
            }
            setTopics(newTopics);
            setMode('Welcome');
            }}>Delete</a></li>}
        </ul>
      </div>
  );
}
//다른 컴포넌트에서 사용할 수 있도록 하기 위한 선언
export default Web;