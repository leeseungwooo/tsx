import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = "리액트";
  return (
    <div className="container">
      <h1 className = "test">Hello, 
      {
        name === "리액트" ? (<h1>YES</h1>): null
      }</h1>
      {/* <p>안녕하세요.</p> */}
    </div>
  );
}


export default App;
