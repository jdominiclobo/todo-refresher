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
}

const Todo: React.FC<TodoProps> = ({ task, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default Todo;
