import { useCreate } from "../hooks/useCreate";

const TaskForm = () => {
  const { mutate, isPending } = useCreate();

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate({ description: event.target.description.value, urgent: false });
    event.target.description.value = "";
  };

  return (
    <div>
      <h3>Create a new task </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Enter task Description"
        />
        <button disabled={isPending} type="submit">
          {isPending ? "Adding" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
