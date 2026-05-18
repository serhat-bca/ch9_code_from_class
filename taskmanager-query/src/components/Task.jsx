import { useToggle } from "../hooks/useToggle";

const Task = ({ task }) => {
  const {mutate} = useToggle();
  return (
    <div>
      <span>{task.description}. </span>
      <span>
        <em>{task.urgent ? "(Urgent)" : ""}</em>
      </span>
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => mutate({...task, urgent: !task.urgent})}
      >
        {task.urgent ? "Make non-urgent" : "make urgent"}
      </span>
    </div>
  );
};

export default Task;
