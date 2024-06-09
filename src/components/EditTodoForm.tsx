import React, { useState } from "react";
import Todo from "./Todo";

interface EditTodoForm {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

interface EditTodoFormProps {
  editTodo: (todo: string, id: string) => void;
  task: Todo;
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({ editTodo, task }) => {
  const [value, setValue] = useState<string>(task.task);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Edit todo"
      />
      <button type="submit">Update task</button>
    </form>
  );
};

export default EditTodoForm;
