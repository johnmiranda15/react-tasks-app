import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      ...task,
      id: uuid(),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 p-4 mb-4">
      <input
        type="text"
        placeholder="Task title"
        className="bg-zinc-800 p-3 w-full mb-2"
        name="title"
        onChange={handleChange}
      />
      <textarea
        placeholder="Task description"
        className="bg-zinc-800 p-3 w-full mb-2"
        name="description"
        onChange={handleChange}
      ></textarea>
      <button className="bg-green-600 px-3 py-1">Save</button>
    </form>
  );
};

export default TaskForm;
