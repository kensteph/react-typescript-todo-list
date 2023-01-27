import React from 'react';
import { Todo } from '../../models/Todo';
import SingleTodo from '../SingleTodo/SingleTodo';
import './style.css';
type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <ul className="todos">
      {todos.map((todo, index) => (
        <li>
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={index}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
