import React, {useState} from "react";

function FruitSelect(props) {
  const[value, setVale] = useState('grape');

  const handleChange = (event) => {
    setVale(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('선택한 과일은 : ' + event.target.elements[0].selectedOptions[0].text);
    //submit시 출력값이 apple이 아닌 사과로 출력하고 싶을 때
    //value = event.target.value
    //내용을 출력하고 싶으면 text 라고 적으면 됨
    // event.target.elements[0].selectedOptions[0].text;  //form tag
    event.preventDefault();
  }

  return(
      <form onSubmit={handleSubmit}>
        <label>
          과일 선택 ㄱㄱ :
          <select value={value} onChange={handleChange}>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="grape">포동</option>
            <option value="watermelon">수박</option>
          </select>
        </label>
        <button>제출</button>
      </form>
  )
}

export default FruitSelect;