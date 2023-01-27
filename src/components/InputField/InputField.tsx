import React from 'react';
import './style.css';

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (ev: React.FormEvent) => void;
};
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="form" onSubmit={handleAdd}>
      <input
        className="input__box"
        type="text"
        placeholder="Add to your lists"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button className="submit__btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
