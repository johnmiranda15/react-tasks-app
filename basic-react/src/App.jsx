import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center">Redux</h2>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
