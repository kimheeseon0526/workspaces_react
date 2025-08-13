import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './App';
import reportWebVitals from './reportWebVitals';

const name = '소플';
//1. jsx 문법
// const element = <h1> 안녕, {name}</h1>;

//2. create 문법
// const element = React.createElement("h1", null, `안녕, ${name}`);

//3. 함수형 component
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName : "heeseon",
  lastName : "Kim"
}

function getGreeting(user) {
  if(user) {
    return <h1>Hello, {formatName(user)}</h1>
  }
  return <h1>Hello, Stranger. </h1>
}

const element = (
    <div>{getGreeting(user)}</div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
