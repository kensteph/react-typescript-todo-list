import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';

const App: React.FC = ()=> {
  // State for my input
  const [todo,setTodo] =  useState<string>("");
  return (
    <div className="App">
     <span className='heading'>TO DO LIST</span>
     <InputField todo={todo} setTodo = {setTodo} />
    </div>
  );
}

export default App;
