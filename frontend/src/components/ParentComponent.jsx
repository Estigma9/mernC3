import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import '../styles/ParentComponent.css'; 

const ParentComponent = () => {
  const [text, setText] = useState('');

  const handleTextChange = (newText)=>{
    setText(newText);
  };

  return (
    <div className='parent-content'>
      <h1>Parent Component</h1>
      <p>Text: {text}</p>
      <ChildComponent onTextChange={handleTextChange}/>      
    </div>
  );
};

export default ParentComponent;