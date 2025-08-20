import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Board(props) {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect( () => {
    axios.get(`http://localhost:8080/boardrest/list`)
        .then((res) => {
          console.log('Content-Type: ' , res.headers['content-type']);
          console.log(res.data);
          setData(res.data);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
  }, []);
  return(
      <div className="container">
        <h1>Board List</h1>
        <button onClick={ () => {
          navigate("reply/304");
        }}> reply이동 </button>
        <button onClick={() => {
          navigate("BoardForm/116");
        }}> write이동 </button>
        <ul>
          {Array.isArray(data?.list) && data.list.map((d) => {
            return <li key={d.bno} onClick={(event) => {
              navigate(`reply/${d.bno}`)
            }}>{d.title}</li>
          })}
        </ul>
      </div>
  );
}

export default Board;