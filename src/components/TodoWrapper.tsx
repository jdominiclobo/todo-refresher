import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
uuidv4();

interface Todo {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoWrapper;
