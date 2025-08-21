import React, {useState, useEffect} from "react";
import axios from "axios";  //서버에서 데이터만 가져올 때 사용하는 객체
import {useNavigate} from "react-router-dom";

function List(props) {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

//List 컴포넌트가 생성될 때 한 번만 호출되도록
  useEffect(() =>{
  axios.get('/boardrest/list')
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
      }, []);
  return (
      <table className="table">
        <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>내용</th>
          <th>작성자</th>
        </tr>
        </thead>
        <tbody>
        {Array.isArray(list?.list) && list.list.map((dto) => {
          return <tr onClick={(res) => {
            navigate(`/read?bno=${dto.bno}`);
          }} className="clickpoint">
            <td>{dto.bno}</td>
            <td>{dto.title}</td>
            <td>{dto.content}</td>
            <td>{dto.writerName}</td>
          </tr>
        })}
        </tbody>
        <tfoot>
        <tr>
          <button type="button" className="btn btn-primary" onClick={(event) =>{
            event.preventDefault();
            navigate('/register');
          }}>글쓰기</button>
        </tr>
        </tfoot>
      </table>
  );
}
export default List;