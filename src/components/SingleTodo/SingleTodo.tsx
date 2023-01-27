import React from 'react';
import { Todo } from '../../models/Todo';
import { AiFillEdit,AiFillDelete,AiOutlineCheck } from 'react-icons/ai';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <div>
      <span>{todo.description}</span>
      <input type="text" value={todo.description} />
      <span className="icon"><AiFillEdit /></span>
      <span className="icon"><AiFillDelete /></span>
      <span className="icon"><AiOutlineCheck /></span>
      
    </div>
  );
};

export default SingleTodo;
