import React from "react";

const students = [
  //json 데이터로 입력
  {
    id:1,
    name : "A",
  },
  {
    id:2,
    name : "B",
  },
  {
    id:3,
    name : "C",
  },
  {
    id:4,
    name : "D",
  },
];

function AttendanceBook(props) {
  return(
      <ul>
        {students.map((student) => {
          return <li key={students.id}>{student.name}</li>
        })}
        {students.map((student, index) =>
        <li key={index}>{student.name}</li>)}
      </ul>
  );
}

export default AttendanceBook;