import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function BoardForm(props) {

  // const [form, setForm] = useState(null);
  const [form, setForm] = useState({title : '', content:'', writeEmail:''});
  //form.title, form.content, form.writeEmail
  // setForm((prev) => ({...prev, [name]: value}));
  //[form] : input에서 입력받은 실제 값
  const navigate = useNavigate();


  return(
      <div className="container">
        <h1>Board Form</h1>
        <form>
          제목 :
          <input type="text" value={form.title} name="title" placeholder="제목 입력" ></input>
          <br />
          내용 :
          <input type="text" value={form.content} name="content" placeholder="내용 입력"></input>
          <br />
          작성자 :
          <input type="text" value={form.writeEmail} name="writeEmail" placeholder="작성자 입력"></input>
        </form>
              <button type="submit" onClick={() => {

              }}>전송</button>
      </div>
  );
}

export default BoardForm;