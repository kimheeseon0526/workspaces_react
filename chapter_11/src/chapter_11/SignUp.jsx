import React, {useState} from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남성");

  const handleSubmit = (event) => {
    alert(`이름 : ${name} , 성별 : ${gender}`);
    event.preventDefault();
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  return(
      <form onSubmit={handleSubmit}>
        <label>
          이름 :
          <input type="text" value={name} onChange={handleChangeName} />
        </label>
        <br />
        <label>
          성별 :
          <select value={gender} onChange={handleChangeGender}>
            <option value="남성" >남성</option>
            <option value="여성" >여성</option>
          </select>
        </label>
      <button>제출</button>
      </form>
  )

}
export default SignUp;