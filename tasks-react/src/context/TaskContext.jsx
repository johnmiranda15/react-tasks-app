import { createContext } from "react";
import { tasks as data } from "../data/tasks";
import { useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: Date.now(),
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
