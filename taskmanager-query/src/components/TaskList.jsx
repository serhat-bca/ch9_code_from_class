import Task from "./Task";
import { useTasks } from "../hooks/useTasks";

const TaskList = () => {
  const { data: tasks, isLoading, isError } = useTasks();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error Loading data...</p>;

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
