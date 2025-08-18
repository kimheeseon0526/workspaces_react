import React, {useState} from "react";

function RequestForm(props) {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('입력한 이름 : '  +  name + ',' + '입력한 요청 사항 : '  + value);
    // alert();
    event.preventDefault(); //페이지 이동 방지
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  return(
      <form onSubmit={handleSubmit}>
        <label>
          이름 :
          <input value={name} onChange={handleChangeName} />
        </label>
        <br />
        <label>
          요청 사항 :
          <textarea onChange={handleChange}
          placeholder="요청 사항 입력하슈">{value}</textarea>
        </label>
        <button>제출</button>
      </form>
  )
}

export default RequestForm;