import Task from "./Task";
import { useTasks } from "../hooks/useTasks";
import { useFilterStore } from "../store/useFilterStore";

const TaskList = () => {
  const filter = useFilterStore((state) => state.filter);
  const { data: tasks, isLoading, isError } = useTasks();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error Loading data...</p>;

  const filteredTasks =
    filter === "urgent"
      ? tasks.filter((t) => t.urgent)
      : filter === "non-urgent"
        ? tasks.filter((t) => !t.urgent)
        : tasks;

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
