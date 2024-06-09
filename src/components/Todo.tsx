import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

interface TodoProps {
  task: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: any;
  editTodo: any;
}

const Todo: React.FC<TodoProps> = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
