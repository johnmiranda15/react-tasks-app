import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h3 className="text-xl">{task.title}</h3>
      <p>{task.description}</p>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-700 transition duration-300 cursor-pointer"
      >
        Eliminar Tarea
      </button>
    </div>
  );
};

export default TaskCard;
