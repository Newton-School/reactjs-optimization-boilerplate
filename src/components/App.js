import React from 'react'
import '../styles/App.css';
import { useMemo, useState } from "react";

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [num, setNum] = useState(0);
//code here 
 setNum(num + 1);

  return (
    <div>
      <div>
        <h2 id='counter1'>Counter1: {counter1}</h2>
        <button id='button1' onClick={}>+</button>
      </div>
      <div>
        <h2 id='counter2'>Counter2: {counter2}</h2>
        <button id='button2' onClick={}>+</button>
      </div>
      <div>
        <h2>Count of  re-rendering </h2>
        <p id='num'>{num}</p>
      </div>
    </div>
  );
};

export default App;
