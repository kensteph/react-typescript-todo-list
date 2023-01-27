import React from 'react';
import './App.css';
import InputField from './components/InputField/InputField';

const App: React.FC = ()=> {
  return (
    <div className="App">
     <span className='heading'>TO DO LIST</span>
     <InputField/>
    </div>
  );
}

export default App;
