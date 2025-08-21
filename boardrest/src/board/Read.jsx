import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

function Read(props) {
  const [dto, setDto] = useState({
    bno: '', title: '', content:'', writerName:'', regDate:'', modDate:''
  });
  const location = useLocation();
  //현재 페이지의 URL 정보(path, query string 등)를 가져오는 훅
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    //쿼리스트링의 값을 가져옴
    console.log(location);
    console.log(queryParams.toString());
    const bno = queryParams.get('bno'); //url의 쿼리스트링에서 bno 값 가져오기

    axios.get(`/boardrest/read?${queryParams.toString()}`)
        .then((res) => {
          setDto(res.data);
          console.log(res.data);
        })
        .catch( (error) => {
          console.log("error", error);
        })
  }, []);

  const handleClickDelete = () => {
    const confirmed = window.confirm("삭제ㄱ?");
    if(!confirmed) return ;
    axios.post(`/boardrest/remove`, dto.bno, {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
        .then((res)=> {
          alert(res.data +"번 글이 삭제됨");
          //삭제 성공시 list로 이동
          navigate('/');
        })
        .catch((error) => {
          console.log("error: ", error);
        })
  };

  return (
      <div>
        <h1 className="my-3">Guestbook Read Page</h1>
        <div className="form-group">
          <label htmlFor="bno">bno</label>
          <input type="text" className="form-control" id="bno" name="bno" placeholder="bno" value={dto.bno} readOnly/>
        </div>

        <div className="form-group">
          <label htmlFor="title">title</label>
          <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={dto.title}
                 readOnly/>
        </div>

        <div className="form-group">
          <label htmlFor="content">content</label>
          <textarea className="form-control" id="content" name="content" value={dto.content} placeholder="Content"
                    readOnly>{dto.content}</textarea>
        </div>

        <div className="form-group">
          <label htmlFor="writer">writer</label>
          <input type="text" className="form-control" id="writer" name="writer" placeholder="Writer"
                 value={dto.writerName}
                 readOnly/>
        </div>

        <div className="form-group">
          <label htmlFor="regDate">regDate</label>
          <input type="text" className="form-control" id="regDate" name="regDate" placeholder="regDate"
                 value={dayjs(dto.regDate).format('YYYY-MM-DD HH:mm')}
                 readOnly/>
        </div>

        <div className="form-group my-4">
          <label htmlFor="modDate">modDate</label>

          <input type="text" className="form-control" id="modDate" name="modDate" placeholder="modDate"
                 value={dto.modDate}
                 readOnly/>
        </div>
        <button type="button" className="btn btn-primary"
                onClick={(event) =>{
                  // event.preventDefault();
                  navigate(`/modify?bno=${dto.bno}`);
                }}
        >수정</button>
        <button type="button" className="btn btn-secondary" onClick={() => {
          navigate('/'); //root로 이동
        }}>리스트</button>
        <button className="btn btn-danger" onClick={handleClickDelete}>삭제</button>
      </div>
  );
}

export default Read;