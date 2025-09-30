import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { tasks } from "../data/tasks";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle(""), setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-lg font-bold">Crea tu Tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-slate-500 p-3 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Describe tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-500 p-3 w-full mb-2"
        />
        <button className="bg-indigo-600 px-2 py-1 rounded-md hover:bg-indigo-950 cursor-pointer ">Guardar</button>
      </form>
    </div>
  );
};
