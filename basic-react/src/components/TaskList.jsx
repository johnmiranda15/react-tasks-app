import { useSelector } from "react-redux";

const TaskList = () => {
  const task = useSelector((state) => state.tasks);

  return (
    <>
      {task.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  );
};

export default TaskList;
