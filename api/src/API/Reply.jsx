import React, {useState, useEffect} from "react";
import axios from "axios";

function Reply(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
  axios.get(`http://localhost:8080/replies/board/101`)
      .then((res) => {
        console.log('Content-Type: ' , res.headers['content-type']);
        console.log("data: " ,res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log("error: " , error);
      });
  }, []);
  return(
      <div className="container">
        <h1>BoardReply Data</h1>
        <ul>
        {data && data.map((d) => {
          return <li>{d.text}</li>
        })}
        </ul>
      </div>
  );
}

export default Reply;

