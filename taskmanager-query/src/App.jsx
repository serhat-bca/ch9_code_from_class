import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterTask from "./components/FilterTask";
import { useState, useEffect } from "react";
import { fetchTasks } from "./services/api";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then((data) => setTasks(data))
      .catch();
  }, []);

  return (
    <div>
      <h2>Tasks with Query and Context</h2>
      <FilterTask />
      <TaskList tasks={tasks} />
      <TaskForm />
    </div>
  );
};

export default App;
