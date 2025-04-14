import React, { useState } from 'react'
import './App.css';
import Keypad from './Keypad';

function App() {
  const [input, setInput] = useState("");
  function handleClick(value) {
    setInput(input + value)
  }
  function handleClear() {
    setInput("")
  }
  function calculate(value) {
    let outputVal = eval(input)
    setInput(outputVal)
  }
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Calculator App Using React</h1>
      <div className="calculator">
        <h1 style={{ textAlign: "center" }}>Calculator</h1>
        <input type="text" value={input} className='output' />
        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate} />
      </div>

    </div>
  );
}

export default App;
