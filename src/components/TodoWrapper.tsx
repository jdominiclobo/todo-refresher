import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";



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

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export default TodoWrapper;
