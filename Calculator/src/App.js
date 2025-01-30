import React, { useState } from 'react'
import './App.css';

function App() {
  const [value, setValue]= useState('');
  
  return (
    <div class="App">
     <h1>Calculator</h1>
     <div class="display">
     <input class="dis"type="text" value={value}/>
     </div>
     <div class="button">
      <button value="7" onClick={e => setValue(value+e.target.value)}>7</button>
      <button value="8" onClick={e => setValue(value+e.target.value)}>8</button>
      <button value="9" onClick={e => setValue(value+e.target.value)}>9</button>
      <button  value="/" onClick={e => setValue(value+e.target.value)} class="symbol">/</button>
      <button value="4" onClick={e => setValue(value+e.target.value)}>4</button>
      <button value="5" onClick={e => setValue(value+e.target.value)}>5</button>
      <button value="6" onClick={e => setValue(value+e.target.value)}>6</button>
      <button value="*" onClick={e => setValue(value+e.target.value)} class="symbol">*</button>
      <button value="1" onClick={e => setValue(value+e.target.value)}>1</button>
      <button value="2" onClick={e => setValue(value+e.target.value)}>2</button>
      <button value="3" onClick={e => setValue(value+e.target.value)}>3</button>
      <button value="+" onClick={e => setValue(value+e.target.value)} class="symbol">+</button>
      <button value="0" onClick={e => setValue(value+e.target.value)}>0</button>
      <button value="." onClick={e => setValue(value+e.target.value)}>.</button>
      <button  class="clear" onClick={e => setValue('')}>AC</button>
      <button value="-" onClick={e => setValue(value+e.target.value)} class="symbol">-</button>
      <button  class="equal" onClick={e => setValue(eval(value))}>=</button>
      <button  class="del" onClick={e => setValue(value.slice(0,-1))}>DE</button>
     </div>
     </div>
    
  );
}

export default App;
