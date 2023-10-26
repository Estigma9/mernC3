import React, { useState } from 'react';
import '../styles/Counter.css';


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count + 1);
  };

  return (
    <div className='counter-content'>
      <p>Count: {count}</p>
      <button className='counter' onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;