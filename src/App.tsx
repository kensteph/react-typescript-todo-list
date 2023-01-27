import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import { Todo } from './models/Todo';

const App: React.FC = () => {
  // State for my input
  const [todo, setTodo] = useState<string>('');
  // State to manage my todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // Function to hanldle add todo
  const handleAdd = (ev: React.FormEvent): void => {
    // Prevent the form to submit
    ev.preventDefault();
    // Verify if the fiel is not empty
    if (todo) {
      setTodos([
        ...todos, //Copy all the existing todo
        { id: Date.now(), description: todo, completed: false }, // Add the new one
      ]);
      // Reset the input
      setTodo('');
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <span className="heading">TO DO LIST</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
