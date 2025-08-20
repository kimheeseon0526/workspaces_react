import React, {useState, useEffect} from "react";
import axios from "axios";

function Sample2(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
        .then((res) => {
          console.log('Content-Type : ', res.headers['content-type']);
          setData(res.data);
          //fetch와의 가장 큰 차이점 -> axios가 json 으로 자동 변환해줌
        })
        .catch((error) => {
          console.log("error : ", error);
        })
  }, []);
  return(
      <div>
        <h1>API DATA</h1>
        {data && data.map((d) => {
          return <p key={d.id}>{d.id}: {d.title}</p>
        })};
      </div>
  );
}
export default Sample2;