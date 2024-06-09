import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
    console.log(value);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Add a todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
